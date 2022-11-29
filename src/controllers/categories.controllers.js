const { CategoriesServices } = require("../services");

const createCategory = async (request, response, next) => {
  try {
    const newCategory = request.body;
    const result = await CategoriesServices.create(newCategory);
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Failed to create category",
    });
  }
};

const getAllCategories = async (request, response, next) => {
  try {
    const result = await CategoriesServices.getAll();
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Could not get all categories",
    });
  }
};

module.exports = { createCategory, getAllCategories };
