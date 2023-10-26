'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProyecto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      nombreProyecto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descProyecto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      donatario: {
        type: Sequelize.INTEGER,
        references: {
          model: "Personas",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Proyectos');
  }
};