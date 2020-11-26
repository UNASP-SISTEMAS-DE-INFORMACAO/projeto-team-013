const { Router } = require('express')
const multer = require('multer')
const multerConfig = require('../config/multer')

const upload = multer(multerConfig)

const FileDeliveryController = require('../app/controllers/FileDeliveryController')
const FileDeliveryValidator = require('../app/validators/FileDeliveryValidator')

const fileDeliveriesRouter = Router({ mergeParams: true })

fileDeliveriesRouter.post(
  '/',
  FileDeliveryValidator.store,
  upload.single('file'),
  FileDeliveryController.store
)
fileDeliveriesRouter.patch(
  '/:file_delivery_id',
  FileDeliveryValidator.updateStatus,
  FileDeliveryController.updateStatus
)

fileDeliveriesRouter.get(
  '/',
  FileDeliveryValidator.index,
  FileDeliveryController.index
)

fileDeliveriesRouter.put(
  '/:file_delivery_id',
  FileDeliveryValidator.update,
  upload.single('file'),
  FileDeliveryController.update
)
module.exports = fileDeliveriesRouter
