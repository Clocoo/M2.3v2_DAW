'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Donadores",[
      {
        id: 1,
        idDonador: 1,
        idPersona: 1,
        idProyecto: 2,
        cantDonada: 1500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        idDonador: 2,
        idPersona: 2,
        idProyecto: 1,
        cantDonada: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        idDonador: 3,
        idPersona: 3,
        idProyecto: 3,
        cantDonada: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Donadores",{},
    {});
  }
};
