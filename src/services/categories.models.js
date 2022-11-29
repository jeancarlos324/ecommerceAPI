const { Categories } = require("../models");
const { getAll } = require("./users.services");

class CategoriesServices {
  static async create(category) {
    try {
      const query = await Categories.create(category);
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const query = await Categories.findAll();
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoriesServices;
