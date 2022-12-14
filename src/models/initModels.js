const {
  Users,
  Categories,
  Products,
  Cart,
  Orders,
  ProductInCart,
  ProductInOrder,
} = require("./index");

const initModels = () => {
  Products.belongsToMany(Categories, { through: "prod_categories" });
  Categories.belongsToMany(Products, { through: "prod_categories" });

  Products.belongsTo(Users, { as: "seller", foreignKey: "user_id" });
  Users.hasMany(Products, { as: "product", foreignKey: "user_id" });

  Cart.belongsTo(Users, { as: "buyer", foreignKey: "user_id" });
  Users.hasOne(Cart, { as: "cart", foreignKey: "user_id" });

  Orders.belongsTo(Users, { as: "buyer", foreignKey: "user_id" });
  Users.hasMany(Orders, { as: "orders", foreignKey: "user_id" });

  ProductInCart.belongsTo(Products, {
    as: "product",
    foreignKey: "product_id",
  });
  Products.hasOne(ProductInCart, { as: "cart", foreignKey: "product_id" });

  ProductInCart.belongsTo(Cart, { as: "cart", foreignKey: "cart_id" });
  Cart.hasMany(ProductInCart, { as: "products", foreignKey: "cart_id" });

  ProductInOrder.belongsTo(Products, {
    as: "product",
    foreignKey: "product_id",
  });
  Products.hasOne(ProductInOrder, { as: "products", foreignKey: "product_id" });

  ProductInOrder.belongsTo(Orders, { as: "order", foreignKey: "order_id" });
  Orders.hasOne(ProductInOrder, { as: "cart", foreignKey: "order_id" });
};

module.exports = initModels;
