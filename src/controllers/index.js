const { createUser, getAllUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { createProduct } = require("./products.controllers");
module.exports = { createUser, getAllUser, userLogin, createProduct };
