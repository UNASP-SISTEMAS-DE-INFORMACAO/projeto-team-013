/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
module.exports = function (sequelize, DataTypes) {
  const Attachment = sequelize.define(
    'Attachment',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER(10)
      },
      title: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true
      }
    }
  )

  Attachment.associate = models => {
    Attachment.belongsTo(models.Module, {
      foreignKey: 'module_id',
      as: 'module'
    }),
    Attachment.belongsTo(models.File, {
      foreignKey: 'file_id',
      as: 'file'
    })
  }
  return Attachment
}
