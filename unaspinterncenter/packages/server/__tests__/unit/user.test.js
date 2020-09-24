const bcrypt = require('bcryptjs')

const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should encrypt user password', async () => {
    const user = await User.create({
      ra: '51',
      id_course: 2,
      email: 'carlb@outlook.com',
      name: 'Carlos Henrique Matos Borges',
      password: '123456789'
    })

    const compareHash = await bcrypt.compare('123456789', user.password_hash)

    expect(compareHash).toBe(true)
  })
})
