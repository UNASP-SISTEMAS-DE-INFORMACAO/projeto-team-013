const faker = require('faker')
const { factory } = require('factory-girl')
const { User, Module } = require('../src/app/models')

factory.define('User', User, {
  ra: faker.random.number({ digits: 5 }),
  id_course: faker.random.number(),
  email: faker.internet.email(),
  name: faker.name.findName(),
  password: faker.internet.password(),
  is_admin: false
})

factory.define('Module', Module, {
  name: 'Atividades complementares',
  description:
    'Modulo criado para ser realizado a entrega das atividades complementares dos alunos do curso de Sistemas de Informações',
  id_course: faker.random.number()
})

module.exports = factory
