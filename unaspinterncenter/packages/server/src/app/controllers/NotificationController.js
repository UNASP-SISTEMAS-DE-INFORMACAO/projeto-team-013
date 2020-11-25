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
}

module.exports = new NotificationController()
