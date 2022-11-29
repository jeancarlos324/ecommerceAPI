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

  Products.belongsTo(Users, { as: "owner", foreignKey: "user_id" });
  Users.hasMany(Products, { as: "product", foreignKey: "user_id" });

  Cart.belongsTo(Users, { as: "buyer", foreignKey: "user_id" });
  Users.hasOne(Cart, { as: "cart", foreignKey: "user_id" });

  Orders.belongsTo(Users, { as: "buyer", foreignKey: "user_id" });
  Users.hasMany(Orders, { as: "orders", foreignKey: "user_id" });

  ProductInCart.belongsTo(Products, { foreignKey: "product_id" });
  Products.hasOne(ProductInCart, { foreignKey: "product_id" });
  ProductInCart.belongsTo(Cart, { foreignKey: "cart_id" });
  Cart.hasOne(ProductInCart, { foreignKey: "cart_id" });

  ProductInOrder.belongsTo(Products, { foreignKey: "order_id" });
  Products.hasOne(ProductInOrder, { foreignKey: "order_id" });
  ProductInOrder.belongsTo(Orders, { foreignKey: "cart_id" });
  Orders.hasOne(ProductInOrder, { foreignKey: "cart_id" });
};

module.exports = initModels;
