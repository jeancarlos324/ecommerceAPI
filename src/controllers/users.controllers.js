const { UserServices } = require("../services");

const createUser = async (request, response, next) => {
  try {
    const newUser = request.body;
    const result = await UserServices.create(newUser);
    response.status(201).json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Failed to create user",
    });
  }
};

const getAllUser = async (request, response, next) => {
  try {
    const result = await UserServices.getAll();
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Could not get all users",
    });
  }
};

const getAllProductsByUser = async (request, response, next) => {
  try {
    const { userId } = request.params;
    const result = await UserServices.getProduct(userId);
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Could not get all products by User",
    });
  }
};

module.exports = { createUser, getAllUser, getAllProductsByUser };
