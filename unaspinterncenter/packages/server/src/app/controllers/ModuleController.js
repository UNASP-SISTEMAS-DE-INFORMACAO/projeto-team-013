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

  async exclude(req, res) {
    const { id } = req.params
    if (!req.admin) return res.status(401).send()

    try {
      const module = await Module.findByPk(id)
      if (module) {
        await module.destroy()
        return res.status(204).send()
      } else {
        throw Error('Module not found')
      }
      
  async index(req, res) {
    const filters = {}

    if (req.query.course) {
      filters.id_course = req.query.course
    }

    try {
      const modules = await Module.findAll({ where: filters })
      return res.send(modules)
    } catch (error) {
      return res.status(400).end()
    }
  }

  async update(req, res) {
    const { id } = req.params

    const module = await Module.findByPk(id)

    if (!module) return res.status(400).end()

    const { name, id_course, description } = req.body

    try {
      await Module.update({ name, id_course, description }, { where: { id } })
      return res.status(204).end()
    } catch (error) {
      return res.status(400).end()
    }
  }
}

module.exports = new ModuleController()
