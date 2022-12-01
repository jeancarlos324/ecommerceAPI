const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const Orders = db.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "total_price",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  status: {
    type: DataTypes.ENUM("complete", "on hold"),
    defaultValue: "on hold",
  },
});

module.exports = Orders;
