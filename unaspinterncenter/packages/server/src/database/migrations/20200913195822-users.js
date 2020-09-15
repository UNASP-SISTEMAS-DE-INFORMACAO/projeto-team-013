'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      ra: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      id_course: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: { allowNull: false, type: Sequelize.DATE },
      updated_at: { allowNull: false, type: Sequelize.DATE }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
}
