const faker = require('faker')
const { factory } = require('factory-girl')
const { User } = require('../src/app/models')

factory.define('User', User, {
  ra: faker.random.number({ digits: 5 }),
  id_course: faker.random.number(),
  email: faker.internet.email(),
  name: faker.name.findName(),
  password: faker.internet.password()
})

module.exports = factory
