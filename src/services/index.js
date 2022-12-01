const UserServices = require("./users.services");
const AuthServices = require("./auth.services");
const ProductServices = require("./product.services");
const CategoriesServices = require("./categories.models");
const CartServices = require("./cart.services");
const OrderServices = require("./orders.services");

module.exports = {
  UserServices,
  AuthServices,
  ProductServices,
  CategoriesServices,
  CartServices,
  OrderServices,
};
