const { Products, ProductCategories, Categories } = require("../models");
const { Op } = require("sequelize");
class ProductServices {
  static async create(newProduct) {
    try {
      const { categories, ...product } = newProduct;
      const productCreate = await Products.create(product);
      const productId = productCreate.id;
      const categoriesProduct = categories.map((categoryId) => ({
        productId,
        categoryId,
      }));
      categoriesProduct.forEach(
        async (category) => await ProductCategories.create(category)
      );
      const query = { product, categoriesProduct };
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const query = await Products.findAll({
        where: {
          availableQty: { [Op.gt]: 0 },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId"],
        },
        include: {
          model: Categories,
          as: "categories",
          attributes: ["id", "name"],
        },
      });
      console.log(query);
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const query = await Products.findOne({
        where: { id },
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

  static async update(productUpdate) {
    try {
      const { id, ...product } = productUpdate;
      console.log(id);
      console.log(product);
      const query = await Products.update(product, { where: { id } });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const query = await Products.destroy({ where: { id } });
      return query;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ProductServices;
