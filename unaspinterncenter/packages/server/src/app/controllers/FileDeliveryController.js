const {
  FileDelivery,
  Delivery,
  Module,
  File,
  Notification,
  sequelize
} = require('../models')

class FileDeliveryController {
  async index(req, res) {
    const { delivery_id } = req.params
    const filters = req.query
    try {
      const file_deliveries = await FileDelivery.findAll({
        where: {
          delivery_id,
          ...filters
        }
      })
      return res.status(200).send(file_deliveries)
    } catch (error) {
      return res.satus(500).send(error)
    }
  }

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
    const transaction = await sequelize.transaction()

    try {
      if (!(await Module.findByPk(id))) return res.status(404).end()
      const delivery = await Delivery.findByPk(delivery_id)
      if (!delivery) return res.status(404).end()

      await FileDelivery.update(
        { status },
        { where: { id: file_delivery_id } },
        { transaction }
      )

      const notification = await Notification.create(
        {
          title: delivery.title,
          description: `O status do seu envio foi modificado para ${status}`,
          notifier_id: req.ra
        },
        { transaction }
      )

      const ownerSocket = req.connectedUsers[req.ra]

      if (ownerSocket) {
        req.io.to(ownerSocket).emit('notification', notification)
      }
      await transaction.commit()
      return res.status(204).end()
    } catch (error) {
      await transaction.rollback()
      return res.status(500).send(error)
    }
  }

  async update(req, res) {
    const { id, delivery_id, file_delivery_id } = req.params
    const { orginalname: name, size, key, location: url = '' } = req.file

    const transaction = await sequelize.transaction()

    try {
      if (!(await Module.findByPk(id))) return res.status(404).end()
      const delivery = await Delivery.findByPk(delivery_id)
      if (!delivery) return res.status(404).end()
      const file_delivery = await FileDelivery.findByPk(file_delivery_id)
      const file = await File.findByPk(file_delivery.file_id)

      await file_delivery.update({ status: 'sent' }, { transaction })
      await file.update({ name, size, key, url }, { transaction })

      await transaction.commit()

      return res.status(200).send({ ...file_delivery.dataValues, file })
    } catch (error) {
      await transaction.rollback()
      return res.status(500).send(error)
    }
  }
}

module.exports = new FileDeliveryController()
