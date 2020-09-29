/* eslint-disable camelcase */

const { Op } = require('sequelize')
const { User } = require('../models')

class UserController {
  async store(req, res) {
    const { email, ra } = req.body
    if (
      await User.findOne({
        where: {
          [Op.or]: [{ email }, { ra }]
        }
      })
    ) {
      return res.status(409).end()
    }
    try {
      const { ra, id_course, name, password } = req.body
      await User.create({ id_course, ra, email, name, password })
      return res.status(201).end()
    } catch (error) {
      console.log(error)
      return res.status(400).end()
    }
  }

  async login(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({
      where: {
        email
      }
    })
    if (user) {
      if (await user.checkPassword(password)) {
        const { ra, is_admin } = user
        const token = User.generateToken({ ra, is_admin })
        return res.status(200).json({ token, is_admin })
      } else {
        return res.status(401).end()
      }
    } else {
      return res.status(401).end()
    }
  }
}

module.exports = new UserController()
