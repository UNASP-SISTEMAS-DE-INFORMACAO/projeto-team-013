const express = require('express')
const routes = express.Router()
const auth = require("./app/middleware/auth")
const UserController = require('./app/controllers/UserController')

routes.get('/', (req, res) => {
  res.send('/ routes is working as expected')
})

routes.post('/users', UserController.store)
routes.post('/auth',UserController.login)
module.exports = routes
