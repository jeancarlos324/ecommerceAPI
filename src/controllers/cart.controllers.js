const { CartServices } = require("../services");

const getCart = async (request, response, next) => {
  const { userInfo } = response.locals;
  try {
    const result = await CartServices.get(userInfo.id);
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Failed to get cart id: ${userInfo.id}`,
    });
  }
};

const addToCart = async (request, response, next) => {
  const { id } = request.body;
  try {
    const { userInfo } = response.locals;
    const product = request.body;
    const result = await CartServices.addProduct(product, userInfo.id);
    if (result.status === "exceeded") {
      response.json(result).status(400);
    } else {
      response.locals.cart = result;
      // response.json(result);
      next();
    }
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Could not add product id: ${id}`,
    });
  }
};

const updatePriceCart = async (request, response, next) => {
  try {
    const { status, query } = response.locals.cart;
    const { userInfo } = response.locals;
    const newPrice = parseFloat(query.price);
    await CartServices.priceUpdate(status, newPrice, userInfo.id);
    response.json(query);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Could not update cart`,
    });
  }
};

const purchasedCart = async (request, response, next) => {
  try {
    const { userInfo } = response.locals;
    const result = await CartServices.purchase(userInfo.id);
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Could not purchased cart`,
    });
  }
};

module.exports = { addToCart, updatePriceCart, getCart, purchasedCart };
