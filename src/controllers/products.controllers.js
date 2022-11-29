const { ProductServices } = require("../services");

const createProduct = async (request, response, next) => {
  try {
    const newProduct = request.body;
    const result = ProductServices.create(newProduct);
    response.status(201).json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Failed to create product",
    });
  }
};

module.exports = { createProduct };
