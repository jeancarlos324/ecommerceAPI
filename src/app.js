const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const db = require("./utils/db");
const initModels = require("./modules/initModels");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("auth ok"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("db sync"))
  .catch((error) => console.log(error));

app.get("/", (request, response) => {
  response.status(200).json({ message: "ok" });
});

module.exports = app;
