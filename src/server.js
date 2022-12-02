const app = require("./app");
const swaggerDocs = require("../swagger");
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server has running in port: ${PORT}`);
  swaggerDocs(app, PORT);
});
