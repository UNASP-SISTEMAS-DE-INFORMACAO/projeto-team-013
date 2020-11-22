/* eslint-disable camelcase */
const { FileDelivery, Delivery, Module, File } = require('../models')

class FileDeliveryController {
  async store(req, res) {
    const { id, delivery_id } = req.params
    const { ra: user_id } = req

    try {
      if (!(await Module.findByPk(id))) return res.status(404).end()
      if (!(await Delivery.findByPk(delivery_id))) return res.status(404).end()

      const { orginalname: name, size, key, location: url = '' } = req.file
      const file = await File.create({
        name,
        size,
        key,
        url
      })

      if (!file) return res.status(400).end()

      const file_delivery = await FileDelivery.create({
        file_id: file.id,
        delivery_id,
        user_id
      })

      file_delivery.file = file

      return res.status(201).send({ ...file_delivery.dataValues, file })
    } catch (error) {
      return res.status(400).end()
    }
  }

  async updateStatus(req, res) {
    const { id, delivery_id, file_delivery_id } = req.params
    const { status } = req.body
    const is_admin = req.admin
    if (!is_admin) return res.status(401).send()

    try {
      if (!(await Module.findByPk(id))) return res.status(404).end()
      if (!(await Delivery.findByPk(delivery_id))) return res.status(404).end()
      await FileDelivery.update({ status }, { where: { id: file_delivery_id } })
      return res.status(204).end()
    } catch (error) {
      return res.status(500).send(error)
    }
  }
}

module.exports = new FileDeliveryController()
