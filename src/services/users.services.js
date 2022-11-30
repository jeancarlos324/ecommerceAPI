const { where } = require("sequelize");
const { Users, Products, Categories } = require("../models");

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

  static async getProduct(userId) {
    try {
      const query = await Products.findAll({
        where: { userId },
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId"],
        },
        include: {
          model: Categories,
          as: "categories",
          attributes: ["id", "name"],
        },
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async update(updateUser) {
    try {
      const { id, password, firstName, lastName, username } = updateUser;
      const query = await Users.update(
        { password, firstName, lastName, username },
        { where: { id } }
      );
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
