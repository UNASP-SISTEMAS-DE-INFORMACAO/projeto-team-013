require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
const server = require('./server.js')

server.listen(3000)

console.log('server running at http://localhost:3000')
