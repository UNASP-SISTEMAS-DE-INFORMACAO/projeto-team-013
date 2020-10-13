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

  it('should not exclude a module when user is not admin', async () => {
    const token = User.generateToken({ ra: 65712, is_admin: false })
    const module = await factory.create('Module')

    const response = await request(app)
      .delete(`/modules/${module.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.status).toBe(401)
  })

  it('should exclude a module when user is admin', async () => {
    const token = User.generateToken({ ra: 65712, is_admin: true })
    const module = await factory.create('Module')

    const response = await request(app)
      .delete(`/modules/${module.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.status).toBe(204)
  })
})
