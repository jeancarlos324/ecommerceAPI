const { ProductInCart } = require("../models");

class CartServices {
  static async addProduct(product) {
    try {
      const query = ProductInCart.create(product);
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
