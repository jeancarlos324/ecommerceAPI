const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const db = require("./utils/db");
const initModels = require("./models/initModels");
const {
  UserRoutes,
  AuthRoutes,
  CategoriesRoutes,
  ProductRoutes,
  CartRoutes,
} = require("./routes");
const handleError = require("./middlewares/error.middlewares");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("auth ok"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("db sync"))
  .catch((error) => console.log(error));

app.get("/", (request, response) => {
  response.status(200).json({ message: "ok" });
});

app.use("/api/v1", UserRoutes);
app.use("/api/v1", AuthRoutes);
app.use("/api/v1", CategoriesRoutes);
app.use("/api/v1", ProductRoutes);
app.use("/api/v1", CartRoutes);

app.use(handleError);
module.exports = app;
