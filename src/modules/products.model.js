const { DataTypes } = require("sequelize");
const db = require("../utils/db");

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
  availableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "available_quantity",
  },
  status: {
    type: DataTypes.STRING,
    //defaultValue: "",
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
});

module.exports = Products;
