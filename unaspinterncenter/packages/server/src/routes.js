const express = require('express')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.get('/', (req, res) => {
  res.send('/ routes is working as expected')
})

routes.post('/users', UserController.store)

module.exports = routes
