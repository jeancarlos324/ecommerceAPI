const { DataTypes } = require("sequelize");
const db = require("../utils/db");

/**
 * @openapi
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Celular2 LCDs22
 *         price:
 *           type: number
 *           example: 10.32
 *         availableQty:
 *           type: number
 *           example: 5
 *         image:
 *           type: string
 *           example: https://w7.pngwing.com/pngs/310/398/png-transparent-smoothie-coffee-blender-milk-cafe-coffee-kitchen-baby-cafe-thumbnail.png
 *         status:
 *           type: string
 *           example: available
 *         userId:
 *           type: number
 *           example: 1
 *         categories:
 *           type: array
 *           example: [1,2]
 *     registerProduct:
 *      type: object
 *      properties:
 *         name:
 *           type: string
 *           example: Celular2 LCDs22
 *         price:
 *           type: number
 *           example: 7
 *         availableQty:
 *           type: number
 *           example: 10.12
 *         image:
 *           type: string
 *           example: https://w7.pngwing.com/pngs/310/398/png-transparent-smoothie-coffee-blender-milk-cafe-coffee-kitchen-baby-cafe-thumbnail.png
 *         status:
 *           type: string
 *           example: available
 *         user_id:
 *           type: number
 *           example: 1
 *         categories:
 *           type: array
 *           example: [1,2]
 *     updateProduct:
 *      type: object
 *      properties:
 *         name:
 *           type: string
 *           example: Celular2 LCDs22
 *         price:
 *           type: number
 *           example: 7
 *         availableQty:
 *           type: number
 *           example: 10
 *         image:
 *           type: string
 *           example: https://w7.pngwing.com/pngs/310/398/png-transparent-smoothie-coffee-blender-milk-cafe-coffee-kitchen-baby-cafe-thumbnail.png
 *         status:
 *           type: string
 *           example: available
 */

const Products = db.define("products", {
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
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "available_quantity",
  },
  status: {
    type: DataTypes.ENUM("available", "unavailable"),
    defaultValue: "available",
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
});

module.exports = Products;
