const { Router } = require('express')
const multer = require('multer')
const multerConfig = require('../config/multer')

const upload = multer(multerConfig)

const AttachmentController = require('../app/controllers/AttachmentController')

const attachmentsRouter = Router({ mergeParams: true })

attachmentsRouter.post('/', upload.single('file'), AttachmentController.store)

module.exports = attachmentsRouter
