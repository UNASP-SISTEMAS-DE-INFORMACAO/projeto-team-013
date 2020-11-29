const { Notification } = require('../models')

class NotificationController {
  async index(req, res) {
    const { id: user_id } = req.params
    const ra = req.ra
    if (user_id != ra) return res.status(401).end()
    try {
      const notifications = await Notification.findAll({
        where: { notifier_id: user_id }
      })
      return res.status(200).send(notifications)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async update(req, res) {
    const { id: user_id } = req.params
    const { notifications } = req.body
    const promises = []

    notifications.forEach(notification => {
      promises.push(
        Notification.update(
          { seen: true },
          { where: { id: notification.id, notifier_id: user_id } }
        )
      )
    })

    try {
      await Promise.all(promises)
      const updated_notifications = await Notification.findAll({
        where: { notifier_id: user_id }
      })

      return res.status(200).send(updated_notifications)
    } catch (error) {
      return res.status(500).send()
    }
  }
}

module.exports = new NotificationController()
