const { Router } = require('express')

const ModuleController = require('../app/controllers/ModuleController')
const ModuleValidator = require('../app/validators/ModuleValidator')

const modulesRouter = Router()

modulesRouter.post('/', ModuleValidator.store, ModuleController.store)
modulesRouter.delete('/:id', ModuleController.exclude)
modulesRouter.get('/', ModuleValidator.index, ModuleController.index)
modulesRouter.put('/:id', ModuleValidator.update, ModuleController.update)
modulesRouter.get('/:id', ModuleValidator.show, ModuleController.show)

module.exports = modulesRouter
