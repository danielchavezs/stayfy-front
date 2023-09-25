const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        initialValue: 1,
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      authors: {
        type: DataTypes.ARRAY,
        unique: false,
        allowNull: false,
      },
      publisher: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publishedDate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pageCount: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false, 
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
