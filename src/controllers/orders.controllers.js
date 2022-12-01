const { OrderServices } = require("../services");

const getAllOrders = async (request, response, next) => {
  try {
    const { userInfo } = response.locals;
    const result = await OrderServices.getOrder(userInfo.id);
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Could not get orders`,
    });
  }
};

module.exports = { getAllOrders };
