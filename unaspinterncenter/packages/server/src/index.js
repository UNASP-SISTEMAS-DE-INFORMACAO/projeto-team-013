require("dotenv").config()
const server = require('./server.js')

server.listen(3000)

console.log("server running at http://localhost:3000")