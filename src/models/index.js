const Cart = require("./cart.model");
const Categories = require("./categories.models");
const Orders = require("./orders.model");
const ProductInCart = require("./productInCart.model");
const ProductInOrder = require("./productInOrders.model");
const Products = require("./products.model");
const ProductCategories = require("./productCategories.model");
const Users = require("./users.model");
module.exports = {
  Users,
  Products,
  ProductCategories,
  Categories,
  Cart,
  Orders,
  ProductInCart,
  ProductInOrder,
};
