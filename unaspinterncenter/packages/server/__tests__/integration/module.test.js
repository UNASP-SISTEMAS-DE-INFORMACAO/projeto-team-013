const request = require('supertest')
const { User } = require('../../src/app/models')
const app = require('../../src/server')

const factory = require('../factories')

const truncate = require('../utils/truncate')

describe('ModuleController', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should return a created module when user is admin', async () => {
    const { ra, is_admin } = await factory.create('User', {
      is_admin: true
    })

    const token = User.generateToken({ ra, is_admin })
    const response = await request(app)
      .post('/modules')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Atividades complementares',
        description:
          'Modulo criado para ser realizado a entrega das atividades complementares dos alunos do curso de Sistemas de Informações',
        id_course: '2'
      })

    expect(response.status).toBe(201)
  })

  it('should not return a created module when user is not admin', async () => {
    const user = await factory.create('User')

    const token = User.generateToken(user.ra, false)
    const response = await request(app)
      .post('/modules')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Atividades complementares',
        description:
          'Modulo criado para ser realizado a entrega das atividades complementares dos alunos do curso de Sistemas de Informações',
        id_course: '2'
      })

    expect(response.status).toBe(401)
  })

  it('should list module when requested', async () => {
    await factory.create('Module')

    const { ra, is_admin } = await factory.create('User', {
      is_admin: true
    })

    const token = User.generateToken({ ra, is_admin })

    const response = await request(app)
      .get('/modules')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.status).toBe(200)
  })

  it('should return courses which is equals to params', async () => {
    const module = await factory.create('Module', {
      id_course: 2
    })
    const token = User.generateToken(65712, false)

    const response = await request(app)
      .get('/modules?course=2')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.body[0].id_course).toBe(module.id_course)
  })

  it('should return correct changes after update', async () => {
    const module = await factory.create('Module')
    const token = User.generateToken(65712, false)

    const response = await request(app)
      .put(`/modules/${module.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Test change'
      })

    expect(response.status).toBe(204)
  })

  it('should not create module with invalid fields', async () => {
    const token = User.generateToken(65712, false)

    const response = await request(app)
      .post('/modules')
      .set('Authorization', `Bearer ${token}`)
      .send({
        description:
          'Modulo criado para ser realizado a entrega das atividades complementares dos alunos do curso de Sistemas de Informações',
        id_course: 2
      })

    expect(response.status).toBe(400)
  })
})
