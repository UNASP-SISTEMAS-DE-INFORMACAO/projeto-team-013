const { Expo } = require('expo-server-sdk')
const expo = new Expo()

module.exports = function (sequelize, DataTypes) {
  const Notification = sequelize.define(
    'Notification',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      seen: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      notifier_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: { model: 'users', key: 'ra' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    },
    {
      hooks: {
        afterCreate: async notification => {
          const { expo_token } = await notification.getUser()
          const notifications = []

          if (!Expo.isExpoPushToken(expo_token)) {
            return
          }

          notifications.push({
            to: expo_token,
            sound: 'default',
            title: notification.title,
            body: notification.description
          })

          const chunks = expo.chunkPushNotifications(notifications)

            ; (async () => {
              for (const chunk of chunks) {
                try {
                  await expo.sendPushNotificationsAsync(chunk)
                } catch (error) {
                  console.error(error)
                }
              }
            })()
        }
      }
    }
  )

  Notification.associate = models => {
    Notification.belongsTo(models.User, {
      foreignKey: 'notifier_id',
      as: 'user'
    })
  }

  return Notification
}
