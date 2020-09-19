const request = require('supertest')
const app = require('../../src/server')

const { User } = require('../../src/app/models')
const factory = require('../factories')

const truncate = require('../utils/truncate')

describe('UserController', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should return a created user', async () => {
    const response = await request(app).post('/users').send({
      ra: '127441',
      id_course: '2',
      email: 'carlad.mb@outlook.com',
      name: 'Carlos Henrique Matos Borges',
      password: '123456789'
    })

    expect(response.status).toBe(201)
  })

  it('should return a valid JTW', async () => {
    const { email, password } = await factory.create('User')

    const response = await request(app).post('/auth').send({
      email,
      password
    })

    expect(response.body).toHaveProperty('token')
  })

  it('should not authenticate with invalid credentials', async () => {
    const { email } = await factory.create('User')

    const response = await request(app).post('/auth').send({
      email,
      password: '897456213'
    })

    expect(response.status).toBe(401)
  })

  it('should not create a user with repeated email', async () => {
    const user = await factory.create('User', {
      email: 'carlos@outlook.com'
    })

    const response = await request(app).post('/users').send({
      ra: user.ra,
      id_course: user.id_course,
      email: user.email,
      name: user.name,
      password: user.password
    })

    expect(response.status).toBe(409)
  })

  it('should not create a user with repeated ra', async () => {
    const user = await factory.create('User', {
      ra: 65712
    })

    const response = await request(app).post('/users').send({
      ra: user.ra,
      id_course: user.id_course,
      email: 'carlosh.mb@outlook.com',
      name: user.name,
      password: user.password
    })

    expect(response.status).toBe(409)
  })

  it('should not create a user with invalid fields', async () => {
    const response = await request(app).post('/users').send({
      ra: '',
      id_course: 2,
      name: 'Carlos Henrique Matos Borges',
      password: '123456789'
    })

    expect(response.status).toBe(400)
  })
})
