const faker = require('faker')
const { factory } = require('factory-girl')
const { User, Module } = require('../src/app/models')

factory.define('User', User, {
  ra: 65712,
  id_course: 2,
  email: 'test@email.com',
  name: 'Alciomar de Holanda',
  password: '123456789',
  is_admin: false
})

factory.define('Module', Module, {
  name: 'Atividades complementares',
  description:
    'Modulo criado para ser realizado a entrega das atividades complementares dos alunos do curso de Sistemas de Informações',
  id_course: 2
})

module.exports = factory
