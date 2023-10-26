'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Donador.belongsTo(models.Persona, {
        foreignKey: 'id',
        as: 'donador',
      });
    
      Donador.belongsTo(models.Proyecto, {
        foreignKey: 'id', // id ?
        as: 'proyecto',
      });
    }
  }
  Donador.init({
    idDonador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    idPersona: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantDonada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Donador',
    tableName: "Donadores",
    name: {
      singular: "donador",
      plural: "donadores"
    }
  });
  return Donador;
};