const { Router } = require('express')

const UserController = require('../app/controllers/UserController')
const UserValidator = require('../app/validators/UserValidator')

const authRouter = Router()

authRouter.post('/', UserValidator.login, UserController.login)

module.exports = authRouter
