'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Personas",[
      {
        id: 1,
        rfc: "1ASD",
        nombre: "Osmar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        rfc: "2ASDDS",
        nombre: "Javier",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        rfc: "3ASDASD",
        nombre: "Torres",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Personas",{},
    {});
  }
};
