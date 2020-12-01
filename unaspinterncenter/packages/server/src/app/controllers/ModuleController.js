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
      console.log(error)
      return res.status(400).end()
    }
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

  async exclude(req, res) {
    const { id } = req.params
    if (!req.admin) return res.status(401).send()

    try {
      const module = await Module.findByPk(id)
      if (!module) return res.status(404).end()
      await module.destroy()
      return res.status(204).send()
    } catch (error) {
      console.log(error)
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

  async show(req, res) {
    const { id } = req.params

    try {
      const module = await Module.findOne({
        include: [
          {
            association: 'attachments',
            attributes: ['id', 'title', 'description'],
            include: [{ association: 'file', attributes: ['id', 'url'] }]
          },
          {
            association: 'deliveries',
            attributes: ['id', 'title', 'description'],
            include: [
              {
                association: 'file_deliveries',
                include: [
                  { association: 'file', attributes: ['id', 'url', 'key'] }
                ]
              }
            ]
          }
        ],
        where: { id }
      })

      if (!module) return res.status(404).end()

      return res.send(module)
    } catch (error) {
      return res.status(400).end()
    }
  }
}

module.exports = new ModuleController()
