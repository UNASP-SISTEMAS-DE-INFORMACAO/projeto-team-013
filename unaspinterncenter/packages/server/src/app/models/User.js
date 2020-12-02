/* jshint indent: 2 */
const bcrypt = require('bcryptjs')
const authConfig = require('../../config/authConfig')
const jwt = require('jsonwebtoken')
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      ra: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      id_course: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(500),
        allowNull: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      password: {
        type: DataTypes.VIRTUAL,
        allowNull: false
      },
      password_hash: { type: DataTypes.STRING },
      expo_token: { type: DataTypes.STRING }
    },
    {
      hooks: {
        beforeCreate: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
          return [user.password_hash]
        },

        beforeUpdate: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
          return [user.password_hash]
        }
      }
    }
  )

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  User.generateToken = function ({ ra, is_admin }) {
    return jwt.sign({ ra, is_admin }, process.env.APP_SECRET, {
      expiresIn: authConfig.ttl
    })
  }
  return User
}
