const { DataTypes } = require("sequelize");
const db = require("../utils/db");

/**
 * @openapi
 * components:
 *   schemas:
 *     category:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Electrodomesticos
 */

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
