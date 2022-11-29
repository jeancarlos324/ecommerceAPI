const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const Cart = db.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    label: "total_price",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    label: "user_id",
  },
});

module.exports = Cart;
