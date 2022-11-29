const { Users } = require("../models");

class UserServices {
  static async create(userData) {
    try {
      const query = Users.create(userData);
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const query = Users.findAll();
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
