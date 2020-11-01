module.exports = function (sequelize, DataTypes) {
  const Delivery = sequelize.define(
    'Delivery',
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
    },
    {
      paranoid: true,
      deletedAt: 'deleted_at'
    }
  )

  Delivery.associate = models => {
    Delivery.belongsTo(models.Module, {
      foreignKey: 'module_id',
      as: 'module'
    }),
    Delivery.hasMany(models.FileDelivery, {
      as: 'file_deliveries',
      foreignKey: 'delivery_id'
    })
  }
  return Delivery
}
