const express = require('express')
const routes = express.Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

const upload = multer(multerConfig)
const auth = require('./app/middleware/auth')

const UserController = require('./app/controllers/UserController')
const ModuleController = require('./app/controllers/ModuleController')
const DeliveryController = require('./app/controllers/DeliveryController')
const AttachmentController = require('./app/controllers/AttachmentController')

const UserValidator = require('./app/validators/UserValidator')
const ModuleValidator = require('./app/validators/ModuleValidator')
const DeliveryValidator = require('./app/validators/DeliveryValidator')

routes.get('/', (req, res) => {
  res.send('/ routes is working as expected')
})

routes.post('/users', UserValidator.store, UserController.store)
routes.get('/users/:ra', UserController.show)

routes.post('/auth', UserValidator.login, UserController.login)

routes.post('/modules', auth, ModuleValidator.store, ModuleController.store)
routes.delete('/modules/:id', auth, ModuleController.exclude)
routes.get('/modules', auth, ModuleValidator.index, ModuleController.index)
routes.put(
  '/modules/:id',
  auth,
  ModuleValidator.update,
  ModuleController.update
)

routes.post(
  '/modules/:id/deliveries',
  auth,
  DeliveryValidator.store,
  DeliveryController.store
)

routes.get(
  '/modules/:id/deliveries',
  auth,
  DeliveryValidator.index,
  DeliveryController.index
)

routes.post(
  '/modules/:id/attachments',
  auth,
  upload.single('file'),
  AttachmentController.store
)

module.exports = routes
