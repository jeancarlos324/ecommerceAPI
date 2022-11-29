const { Products, Categories } = require("../models");

class ProductServices {
  static async create(newProduct) {
    try {
      const { categories, ...product } = newProduct;
      console.log(product);
      console.log(categories);
      const productCreate = await Products.create(product);
      const productId = productCreate.id;
      const categoriesProduct = categories.map((categoryId) => ({
        productId,
        categoryId,
      }));
      categoriesProduct.forEach(
        async (category) => await Categories.create(category)
      );
      return { product, categoriesProduct };
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ProductServices;
