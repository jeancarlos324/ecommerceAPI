const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const Categories = db.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Categories;
