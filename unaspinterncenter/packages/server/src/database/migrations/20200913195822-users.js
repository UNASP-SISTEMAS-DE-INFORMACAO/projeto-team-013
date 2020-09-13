'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      is_admin: {
        type: Sequelize.INTEGER(1),
        allowNull: true
      },
      id_curso: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
      ra: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      nome: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      password: {
        type: Sequelize.STRING(512),
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