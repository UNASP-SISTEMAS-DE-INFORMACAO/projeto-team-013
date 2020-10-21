/* eslint-disable camelcase */
const { Delivery } = require('../models')
const { Module } = require('../models')

class DeliveryController {
  async store(req, res) {
    const { id } = req.params
    if (!(await Module.findByPk(id))) return res.status(404).end()
    const { title, description } = req.body

    if (!req.admin) return res.status(401).send()

    try {
      const delivery = await Delivery.create({
        title,
        description,
        module_id: id
      })
      return res.status(201).send(delivery)
    } catch (error) {
      return res.status(400).end()
    }
  }
}

module.exports = new DeliveryController()
