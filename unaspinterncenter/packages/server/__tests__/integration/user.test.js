const request = require('supertest')
const app = require('../../src/server')

const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('UserController', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should return a created user', async () => {
    const response = await request(app).post('/users').send({
      ra: '65712',
      id_course: 2,
      email: 'carlosb@outlook.com',
      name: 'Carlos Henrique Matos Borges',
      password: '123456789'
    })

    expect(response.status).toBe(201)
  })

  it('should return a valid JTW', async () => {
    const { email, password } = await User.create({
      ra: '65712',
      id_course: 2,
      email: 'carlos@outlook.com',
      name: 'Carlos Henrique Matos Borges',
      password: '123456789'
    })

    const response = await request(app).post('/auth').send({
      email,
      password
    })

    expect(response.body).toHaveProperty('token')
  })

  it('should not authenticate with invalid credentials', async () => {
    const { email } = await User.create({
      ra: '65712',
      id_course: 2,
      email: 'carlos@outlook.com',
      name: 'Carlos Henrique Matos Borges',
      password: '123456789'
    })

    const response = await request(app).post('/auth').send({
      email,
      password: '897456213'
    })

    expect(response.status).toBe(401)
  })

  it('should not create a user with repeated email', async () => {
    const { ra, id_course, email, name, password } = await User.create({
      ra: '65712',
      id_course: 2,
      email: 'carlos@outlook.com',
      name: 'Carlos Henrique Matos Borges',
      password: '123456789'
    })

    const response = await request(app).post('/users').send({
      ra,
      id_course,
      email,
      name,
      password
    })

    expect(response.status).toBe(409)
  })
})
