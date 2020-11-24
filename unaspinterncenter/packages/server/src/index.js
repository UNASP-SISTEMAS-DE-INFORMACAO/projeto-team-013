require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const swaggerUi = require('swagger-ui-express')

const server = require('./server.js')
const swaggerOptions = require('./config/swaggerConfig')

// server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions))

server.listen(3000)
