/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    is_admin: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    id_curso: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ra: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  })

  return User
}
