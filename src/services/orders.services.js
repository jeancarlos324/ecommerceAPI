const { Orders, ProductInOrder, Products } = require("../models");

class OrderServices {
  static async getOrder(userId) {
    try {
      const query = Orders.findAll({
        where: { userId },
        attributes: { exclude: ["userId"] },
        include: {
          model: ProductInOrder,
          as: "cart",
          attributes: {
            exclude: [
              "orderId",
              "userId",
              "createdAt",
              "updatedAt",
              "productId",
              "order_id",
            ],
          },
          include: {
            model: Products,
            as: "product",
            attributes: ["id", "name", "price", "image"],
          },
        },
      });
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
