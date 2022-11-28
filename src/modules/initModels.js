const Cart = require("./cart.model");
const Orders = require("./orders.model");
const Products = require("./products.model");
const Users = require("./users.model");

const initModels = () => {
  Products.belongsTo(Users, { as: "owner", foreignKey: "user_id" });
  Users.hasMany(Products, { as: "product", foreignKey: "user_id" });

  Cart.belongsTo(Users, { as: "buyer", foreignKey: "user_id" });
  Users.hasOne(Cart, { as: "cart", foreignKey: "user_id" });

  Orders.belongsTo(Users, { as: "buyer", foreignKey: "user_id" });
  Users.hasMany(Orders, { as: "orders", foreignKey: "user_id" });
};

module.exports = initModels;
