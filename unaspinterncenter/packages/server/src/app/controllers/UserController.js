const { User } = require('../models')

class UserController {
  async store(req, res) {
    const { id_curso, ra, email, nome } = req.body
    const is_admin = 0
    console.log(req.body)
    if (!id_curso && !ra && !email && !nome) {
      console.log(Nome)
      return res.status(400).end()
    }

    try {
      await User.create({ id_curso, ra, email, nome ,is_admin})
      return res.status(201).end()
    } catch (error) {
      console.log(error)
      return res.status(400).end()
    }
  }
}

module.exports = new UserController()
