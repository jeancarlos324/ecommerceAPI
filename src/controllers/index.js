const { userLogin } = require("./auth.controllers");
const { addToCart } = require("./cart.controllers");
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
};
