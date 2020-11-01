/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
module.exports = function (sequelize, DataTypes) {
  const FileDelivery = sequelize.define(
    'FileDelivery',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER(10)
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['sent', 'analyzing', 'approved', 'disapproved'],
        defaultValue: 'sent'
      }
    }
  )

  FileDelivery.associate = models => {
    FileDelivery.belongsTo(models.File, {
      foreignKey: 'file_id',
      as: 'file'
    }),
    FileDelivery.belongsTo(models.Delivery, {
      foreignKey: 'delivery_id',
      as: 'delivery'
    })
    FileDelivery.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
  }
  return FileDelivery
}
