const { Module } = require('../models')

class ModuleController {
  async store(req, res) {
    const { name, id_course, description } = req.body

    if (!req.admin) return res.status(401).send()

    try {
      const module = await Module.create({
        name,
        id_course,
        description
      })

      return res.status(201).send(module)
    } catch (error) {
      return res.status(400).end()
    }
  }
}

module.exports = new ModuleController()
