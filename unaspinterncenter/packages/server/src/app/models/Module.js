module.exports = function (sequelize, DataTypes) {
  const Module = sequelize.define('Module', {
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
