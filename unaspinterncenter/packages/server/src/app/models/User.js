/* jshint indent: 2 */
const bcrypt= require("bcryptjs")
const authConfig = require("../../config/authConfig")
const jwt = require("jsonwebtoken")
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
    },
    password:{
      type:DataTypes.STRING(512),
      allowNull:false,
      select:false
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        console.log(user.password)
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 8);

        }
        return [user.password];
      },

      beforeUpdate: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 8);
        }
        return [user.password];
      },
    },
  })
  User.prototype.checkPassword = function (senha) {
    return bcrypt.compare(senha, this.password);
  };
  User.generateToken = function ({ ra }) {
    return jwt.sign({ ra }, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });
  };
  return User
}
