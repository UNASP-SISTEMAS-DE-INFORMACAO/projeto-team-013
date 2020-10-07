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
routes.post('/auth', UserValidator.login, UserController.login)

routes.post('/modules', auth, ModuleValidator.store, ModuleController.store)

module.exports = routes
