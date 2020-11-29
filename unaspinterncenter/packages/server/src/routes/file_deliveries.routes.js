const { Router } = require('express')

const FileDeliveryController = require('../app/controllers/FileDeliveryController')

const file_deliveries = Router()

file_deliveries.get('/', FileDeliveryController.all)

module.exports = file_deliveries
