const { userLogin } = require("./auth.controllers");
const {
  addToCart,
  updatePriceCart,
  getCart,
  purchasedCart,
  removeToCart,
} = require("./cart.controllers");
const {
  createProduct,
  getAllProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
} = require("./products.controllers");
const {
  createUser,
  getAllUser,
  getAllProductsByUser,
  updateUser,
} = require("./users.controllers");
const {
  getAllCategories,
  createCategory,
} = require("./categories.controllers");

const { getAllOrders } = require("./orders.controllers");
module.exports = {
  createUser,
  getAllUser,
  userLogin,
  createProduct,
  createCategory,
  getAllCategories,
  getAllProducts,
  getAllProductsByUser,
  getProductsById,
  updateProduct,
  deleteProduct,
  updateUser,
  addToCart,
  updatePriceCart,
  getCart,
  purchasedCart,
  getAllOrders,
  removeToCart,
};
