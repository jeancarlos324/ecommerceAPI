const {
  ProductInCart,
  Products,
  Cart,
  Orders,
  ProductInOrder,
} = require("../models");

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
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async priceUpdate(status, price, userId) {
    try {
      const getBeforePrice = await Cart.findOne({
        where: { userId, status: "on hold" },
        attributes: ["id", "totalPrice"],
      });
      const { id, totalPrice } = getBeforePrice.dataValues;
      if (status === "added") {
        const updated = await Cart.update(
          { totalPrice: totalPrice + price },
          { where: { id } }
        );
        return updated;
      } else if (status === "removed") {
        const updated = await Cart.update(
          { totalPrice: totalPrice - price },
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
          where: { userId, status: "on hold" },
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

  static async remove(id, userId) {
    try {
      const getCart = await Cart.findOne({ where: { userId } });
      const cartId = getCart.id;
      const getPriceProduct = await ProductInCart.findOne({
        where: { cartId, id },
      });
      const { price, quantity } = getPriceProduct;
      const remove = await ProductInCart.destroy({ where: { cartId, id } });
      const query = {
        status: "removed",
        query: { price, quantity, id: getPriceProduct.id },
      };
      if (remove) return query;
      return remove;
    } catch (error) {
      throw error;
    }
  }

  static async purchase(userId) {
    try {
      await Cart.update({ status: "purchased" }, { where: { userId } });
      const getCart = await Cart.findOne({
        where: { userId },
        attributes: { exclude: ["createdAt", "updatedAt", "userId"] },
        include: {
          model: ProductInCart,
          as: "products",
          attributes: ["id", "price", "status", "quantity", "productId"],
          include: {
            model: Products,
            as: "product",
            attributes: ["name", "price"],
          },
        },
      });
      const { id, totalPrice, products } = getCart.dataValues;
      const createOrder = await Orders.create({
        userId,
        totalPrice,
        status: "complete",
      });
      const productsToCart = products.map((prod) => ({
        orderId: createOrder.id,
        productId: prod.dataValues.productId,
        price: prod.dataValues.price,
        quantity: prod.dataValues.quantity,
        status: "purchased",
      }));
      productsToCart.forEach(
        async (product) => await ProductInOrder.create(product)
      );
      await Cart.destroy({ where: { id } });
      return {
        status: "purchased",
        message: `purchased card ${id} in order ${createOrder.id}`,
        getCart,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
