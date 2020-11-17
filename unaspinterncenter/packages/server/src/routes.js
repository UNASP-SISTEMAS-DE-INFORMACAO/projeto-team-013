const express = require('express')
const routes = express.Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

const upload = multer(multerConfig)
const auth = require('./app/middleware/auth')

// Controllers

const UserController = require('./app/controllers/UserController')
const ModuleController = require('./app/controllers/ModuleController')
const DeliveryController = require('./app/controllers/DeliveryController')
const AttachmentController = require('./app/controllers/AttachmentController')
const FileDeliveryController = require('./app/controllers/FileDeliveryController')

// Validators

const UserValidator = require('./app/validators/UserValidator')
const ModuleValidator = require('./app/validators/ModuleValidator')
const DeliveryValidator = require('./app/validators/DeliveryValidator')
const FileDeliveryValidator = require('./app/validators/FileDeliveryValidator')

routes.get('/', (req, res) => {
  res.send('/ routes is working as expected')
})

// Users Routes

routes.post('/users', UserValidator.store, UserController.store)
routes.get('/users/:ra', UserController.show)

// Auth Routes

routes.post('/auth', UserValidator.login, UserController.login)

// Modules Routes
routes.post('/modules', auth, ModuleValidator.store, ModuleController.store)
routes.delete('/modules/:id', auth, ModuleController.exclude)
routes.get('/modules', auth, ModuleValidator.index, ModuleController.index)
routes.put(
  '/modules/:id',
  auth,
  ModuleValidator.update,
  ModuleController.update
)
routes.get('/modules/:id', auth, ModuleValidator.show, ModuleController.show)

// Deliveries Routes
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

// Attachments Routes

routes.post(
  '/modules/:id/attachments',
  auth,
  upload.single('file'),
  AttachmentController.store
)

// FileDelivery Routes

routes.post(
  '/modules/:id/deliveries/:delivery_id/file_deliveries',
  auth,
  FileDeliveryValidator.store,
  upload.single('file'),
  FileDeliveryController.store
)

module.exports = routes
