/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
module.exports = function (sequelize, DataTypes) {
  const Module = sequelize.define('Module', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER(10)
    },
    name: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    id_course: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  Module.associate = models => {
    Module.hasMany(models.Delivery, {
      as: 'deliveries',
      foreignKey: 'module_id'
    }),
      Module.hasMany(models.Attachment, {
        as: 'attachments',
        foreignKey: 'module_id'
      })
  }

  return Module
}
