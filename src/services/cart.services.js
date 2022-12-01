const { ProductInCart, Products, Cart } = require("../models");

class CartServices {
  static async get(userId) {
    try {
      const query = Cart.findOne({
        where: { userId },
        attributes: { exclude: ["createdAt", "updatedAt", "userId"] },
        include: {
          model: ProductInCart,
          as: "products",
          attributes: ["id", "price", "status", "quantity"],
          include: {
            model: Products,
            as: "product",
            attributes: ["id", "name", "price", "image"],
          },
        },
        // include: {
        //   model: ProductInCart,
        //   include: {
        //     model: Products,
        //     attributes: ["name", "price", "image"],
        //   },
        // },
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async priceUpdate(status, price, userId) {
    try {
      if (status === "added") {
        const getBeforePrice = await Cart.findOne({
          where: { userId },
          attributes: ["id", "totalPrice"],
        });
        const { id, totalPrice } = getBeforePrice.dataValues;
        const updated = await Cart.update(
          { totalPrice: totalPrice + price },
          { where: { id } }
        );
        return updated;
      }
      return false;
    } catch (error) {
      throw error;
    }
  }

  static async addProduct(product, userId) {
    try {
      const { id, quantity } = product;
      const getDetailsProduct = await Products.findOne({
        where: { id },
        attributes: ["availableQty", "price", "id", "name"],
      });
      const { availableQty, price, name } = getDetailsProduct;
      if (quantity > availableQty) {
        return {
          status: "exceeded",
          message: `the quantity '${name}' was exceeded, limit: ${availableQty}`,
        };
      } else {
        const pricePerQuantity = quantity * price;
        const getCart = await Cart.findOrCreate({
          where: { userId },
          defaults: {
            totalPrice: 0,
            userId,
            user_id: userId,
          },
        });
        const cartId = getCart[0].dataValues.id;
        const query = await ProductInCart.create({
          cartId,
          productId: getDetailsProduct.id,
          quantity,
          price: pricePerQuantity,
          status: "on hold",
        });
        return { query, status: "added" };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
