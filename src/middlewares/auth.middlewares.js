const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (request, response, next) => {
  const bearerToken = request.headers.authorization;
  if (bearerToken) {
    const token = bearerToken.split("Bearer ")[1];
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET, "HS512");
      next();
    } catch (error) {
      next({
        status: 400,
        errorContent: error.message,
        message: "Invalid Jwt Token",
      });
    }
  }
};

module.exports = authenticate;
