const { CartServices } = require("../services");

const addToCart = (request, response, next) => {
  try {
    const product = request.body;
    const result = CartServices.addProduct(product);
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Could not add product id: ${id}`,
    });
  }
};

module.exports = { addToCart };
