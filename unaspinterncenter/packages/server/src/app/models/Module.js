module.exports = function (sequelize, DataTypes) {
  const Module = sequelize.define('Module', {
    id: {
      allowNull: false,
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
  return Module
}
