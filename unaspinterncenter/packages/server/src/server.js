const express = require('express')
const routes = require('./routes')
const { errors } = require('celebrate')
const cors = require('cors')
const path = require('path')

class App {
  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(cors({}))
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    )
  }

  routes() {
    this.express.use(routes)
    this.express.use(errors())
  }
}

module.exports = new App().express
