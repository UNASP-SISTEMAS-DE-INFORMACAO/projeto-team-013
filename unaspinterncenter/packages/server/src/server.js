const express = require('express')
const routes = require('./routes')
const { errors } = require('celebrate')
const cors = require('cors')
const path = require('path')
const http = require('http')
const io = require('socket.io')

class App {
  constructor() {
    this.app = express()
    this.server = http.createServer(this.app)
    this.socket()
    this.middlewares()
    this.routes()

    this.connectedUsers = {}
  }

  socket() {
    this.io = io(this.server, {
      cors: {
        origin: '*'
      }
    })
    this.io.on('connection', socket => {
      const { user_id } = socket.handshake.query
      this.connectedUsers[user_id] = socket.id
      console.log(
        `The client [${user_id}, ${this.connectedUsers[user_id]}] has been connected`
      )
      socket.on('disconnect', () => {
        delete this.connectedUsers[user_id]
      })
    })
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    )
    this.app.use((req, res, next) => {
      req.io = this.io
      req.connectedUsers = this.connectedUsers

      next()
    })
  }

  routes() {
    this.app.use(routes)
    this.app.use(errors())
  }
}

module.exports = new App().server
