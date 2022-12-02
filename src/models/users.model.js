const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../utils/db");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: jose234
 *         firstName:
 *           type: string
 *           example: Jose
 *         lastName:
 *           type: string
 *           example: Perez
 *         email:
 *           type: string
 *           example: jose123@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     register:
 *      type: object
 *      properties:
 *         username:
 *           type: string
 *           example: jose234
 *         firstName:
 *           type: string
 *           example: Jose
 *         lastName:
 *           type: string
 *           example: Perez
 *         email:
 *           type: string
 *           example: jose123@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *      type: object
 *      properties:
 *         email:
 *           type: string
 *           example: gpro1pro@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "last_name",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  }
);

module.exports = Users;
