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

module.exports = fileDeliveriesRouter
