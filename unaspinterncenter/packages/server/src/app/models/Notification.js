module.exports = function (sequelize, DataTypes) {
  const Notification = sequelize.define('Notification', {
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
  })

  Notification.associate = models => {
    Notification.belongsTo(models.User, {
      foreignKey: 'notifier_id',
      as: 'user'
    })
  }

  return Notification
}
