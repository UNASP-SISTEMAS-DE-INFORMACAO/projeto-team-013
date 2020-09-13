/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    IsAdmin: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    idCurso: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Email: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Nome: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  })

  return User
}
