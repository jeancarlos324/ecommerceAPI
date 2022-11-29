const { userLogin } = require("./auth.controllers");
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
};
