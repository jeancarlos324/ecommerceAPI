const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const ProductInOrder = db.define("product_in_order", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "order_id",
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "product_id",
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: "0",
  },
  status: {
    type: DataTypes.ENUM("pending", "purchased"),
    allowNull: false,
    defaultValue: "pending",
  },
});

module.exports = ProductInOrder;
