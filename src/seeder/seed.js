const {
  Users,
  Categories,
  Products,
  ProductCategories,
} = require("../models/index");
const initModels = require("../models/initModels");
const db = require("../utils/db");

const users = [
  {
    username: "mariag23",
    firstName: "Maria2",
    lastName: "Gonzales2",
    email: "maria@gmail.com",
    password: "1234",
  },
  {
    username: "mariag",
    firstName: "Maria2",
    lastName: "Gonzales2",
    email: "maria2@gmail.com",
    password: "1234",
  },
  {
    username: "mariag2",
    firstName: "Maria2",
    lastName: "Gonzales2",
    email: "maria3@gmail.com",
    password: "1234",
  },
  {
    username: "mariag1",
    firstName: "Maria2",
    lastName: "Gonzales2",
    email: "maria4@gmail.com",
    password: "1234",
  },
];

const categories = [
  {
    name: "televisores",
  },
  {
    name: "celulares",
  },
  {
    name: "lavadoras",
  },
  {
    name: "cafeteras",
  },
  {
    name: "refrigeradoras",
  },
];

const products = [
  {
    name: "Licuadora LCD",
    price: 131.21,
    image:
      "https://www.shutterstock.com/image-illustration/ultra-high-definition-digital-television-260nw-551106277.jpg",
    availableQty: 4,
    status: "awa",
    userId: 2,
  },
  {
    name: "Televisor LCD",
    price: 1231.21,
    image:
      "https://www.shutterstock.com/image-illustration/ultra-high-definition-digital-television-260nw-551106277.jpg",
    availableQty: 0,
    status: "awa",
    userId: 1,
  },
  {
    name: "Cafetera LCD",
    price: 31.21,
    image:
      "https://www.shutterstock.com/image-illustration/ultra-high-definition-digital-television-260nw-551106277.jpg",
    availableQty: 1,
    status: "awa",
    userId: 3,
  },
];

const productCategories = [
  {
    productId: 1,
    categoryId: 1,
  },
  {
    productId: 1,
    categoryId: 2,
  },
  {
    productId: 2,
    categoryId: 1,
  },
  {
    productId: 3,
    categoryId: 1,
  },
  {
    productId: 3,
    categoryId: 2,
  },
  {
    productId: 3,
    categoryId: 4,
  },
];
initModels();
db.sync({ force: true }).then(() => {
  console.log("seeding start");

  users.forEach(async (user) => await Users.create(user));

  setTimeout(() => {
    categories.forEach(
      async (conversation) => await Categories.create(conversation)
    );
  }, 100);

  setTimeout(() => {
    products.forEach(async (product) => await Products.create(product));
  }, 200);

  setTimeout(() => {
    productCategories.forEach(
      async (pc) => await ProductCategories.create(pc)
    );
  }, 300);

  console.log("seeding stop");
});
