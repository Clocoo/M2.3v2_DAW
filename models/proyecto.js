'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Proyecto.hasMany(models.Donador, {
        foreignKey: 'id', // id ?
        as: 'donadores',
      });

      Proyecto.hasOne(models.Persona, {
        foreignKey: "id",
        as: "donatario",
      });
    }
  }
  Proyecto.init({
    idProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    nombreProyecto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descProyecto: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Proyecto',
  });
  return Proyecto;
};