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
      type: DataTypes.STRING(500),
      allowNull: true
    }
  })

  Module.associate = models => {
    Module.hasMany(models.Delivery, {
      as: 'deliveries',
      foreignKey: 'module_id'
    })
  }

  return Module
}
