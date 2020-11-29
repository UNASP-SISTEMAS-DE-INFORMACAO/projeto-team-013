const { Router } = require('express')

const DeliveryController = require('../app/controllers/DeliveryController')
const DeliveryValidator = require('../app/validators/DeliveryValidator')

const deliveriesRouter = Router({ mergeParams: true })

deliveriesRouter.post('/', DeliveryValidator.store, DeliveryController.store)
deliveriesRouter.get('/', DeliveryValidator.index, DeliveryController.index)
deliveriesRouter.get('/includeModules',DeliveryController.listWithModules)

module.exports = deliveriesRouter
