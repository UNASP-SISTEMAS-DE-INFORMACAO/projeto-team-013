const { Router } = require('express')

const NotificationController = require('../app/controllers/NotificationController')

const NotificationValidator = require('../app/validators/NotificationValidator')

const notificationsRouter = Router({ mergeParams: true })

notificationsRouter.get(
  '/',
  NotificationValidator.index,
  NotificationController.index
)

notificationsRouter.patch(
  '/',
  NotificationValidator.update,
  NotificationController.update
)

module.exports = notificationsRouter
