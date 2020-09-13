const { User } = require('../models')

class UserController {
  async store(req, res) {
    const { idCurso, RA, Email, Nome } = req.body

    if (idCurso && RA && Email && Nome) {
      return res.status(400)
    }

    try {
      await User.create({ idCurso, RA, Email, Nome })
      return res.status(201).end()
    } catch (error) {
      console.log(error)
      return res.status(400).end()
    }
  }
}

module.exports = new UserController()
