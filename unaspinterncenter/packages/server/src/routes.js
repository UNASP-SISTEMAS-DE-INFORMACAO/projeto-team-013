const express = require('express')
const routes = express.Router()
const auth = require('./app/middleware/auth')

const UserController = require('./app/controllers/UserController')
const ModuleController = require('./app/controllers/ModuleController')

const UserValidator = require('./app/validators/UserValidator')
const ModuleValidator = require('./app/validators/ModuleValidator')

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

module.exports = routes
