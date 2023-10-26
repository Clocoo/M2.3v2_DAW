'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Donadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idDonador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      idPersona: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Personas",
          key: "id",
        },
      },
      idProyecto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Proyectos",
          key: "id", // id ?
        },
      },
      cantDonada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.dropTable('Donadores');
  }
};