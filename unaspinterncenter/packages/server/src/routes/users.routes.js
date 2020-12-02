const { Router } = require('express')
const auth = require('../app/middleware/auth')

const UserController = require('../app/controllers/UserController')
const UserValidator = require('../app/validators/UserValidator')

const usersRouter = Router()

usersRouter.get('/', auth, UserValidator.index, UserController.index)
usersRouter.post('/', UserValidator.store, UserController.store)
usersRouter.get('/:ra', auth, UserValidator.show, UserController.show)
usersRouter.put('/:ra', auth, UserController.update)

module.exports = usersRouter
