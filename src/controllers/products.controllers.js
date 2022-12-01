const { ProductServices } = require("../services");

const createProduct = async (request, response, next) => {
  try {
    const newProduct = request.body;
    const result = await ProductServices.create(newProduct);
    response.status(201).json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Failed to create product",
    });
  }
};

const getAllProducts = async (request, response, next) => {
  try {
    const result = await ProductServices.getAll();
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Could not get all products",
    });
  }
};

const getProductsById = async (request, response, next) => {
  const { productId } = request.params;
  try {
    const result = await ProductServices.getById(productId);
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Could not get product with id: ${productId}`,
    });
  }
};

const updateProduct = async (request, response, next) => {
  const { productId } = request.params;
  const product = request.body;
  try {
    const result = await ProductServices.update({ id: productId, ...product });
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Could not update product with id: ${productId}`,
    });
  }
};

const deleteProduct = async (request, response, next) => {
  const { productId } = request.params;
  try {
    const result = await ProductServices.delete(productId);
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Could not delete product with id: ${productId}`,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
};
