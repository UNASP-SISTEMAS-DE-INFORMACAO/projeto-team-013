const { celebrate, Joi, errors, Segments } = require('celebrate')

const express = require('express')
const routes = express.Router()
const auth = require('./app/middleware/auth')
const UserController = require('./app/controllers/UserController')

const UserValidator = require('./app/validators/UserValidator')

routes.get('/', (req, res) => {
  res.send('/ routes is working as expected')
})

routes.post('/users', UserValidator.store, UserController.store)
routes.post('/auth', UserValidator.login, UserController.login)

module.exports = routes
