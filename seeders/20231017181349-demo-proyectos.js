'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Proyectos",[
      {
        id: 1,
        idProyecto: 1,
        nombreProyecto: "PC GAMER",
        descProyecto: "16 gb ram",
        donatario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        idProyecto: 2,
        nombreProyecto: "Mouse RGB",
        descProyecto: "16 gb ram",
        donatario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        idProyecto: 3,
        nombreProyecto: "Teclado RGB",
        descProyecto: "16 gb ram",
        donatario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Proyectos",{},
    {});
  }
};
