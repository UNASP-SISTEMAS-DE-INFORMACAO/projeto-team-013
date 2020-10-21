'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('modules', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_course: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: { allowNull: false, type: Sequelize.DATE },
      updated_at: { allowNull: false, type: Sequelize.DATE }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('modules')
  }
}
