const { Router } = require('express')
const auth = require('../app/middleware/auth')

const usersRouter = require('./users.routes')
const authRouter = require('./auth.routes')
const modulesRouter = require('./modules.routes')
const deliveriesRouter = require('./deliveries.routes')
const attachmentsRouter = require('./attachments.routes')
const fileDeliveriesRouter = require('./fileDeliveries.routes')
const notificationsRouter = require('./notifications.routes')

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/users', usersRouter)
routes.use('/modules', auth, modulesRouter)
routes.use('/modules/deliveries',auth,deliveriesRouter)
routes.use('/modules/:id/deliveries', auth, deliveriesRouter)
routes.use('/modules/:id/attachments', auth, attachmentsRouter)
routes.use(
  '/modules/:id/deliveries/:delivery_id/file_deliveries',
  auth,
  fileDeliveriesRouter
)
routes.use('/users/:id/notifications', auth, notificationsRouter)

module.exports = routes
