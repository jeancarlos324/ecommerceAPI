const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

class AuthServices {
  static async autenthicate(credentials) {
    try {
      const { email, password } = credentials;
      const query = await Users.findOne({
        where: { email },
        attributes: ["id", "password", "email", "lastName", "firstName"],
      });
      if (!query) return query;
      const verifyAuth = bcrypt.compareSync(password, query.password);
      return verifyAuth ? { verifyAuth, query } : { verifyAuth };
    } catch (error) {
      throw error;
    }
  }

  static getToken(data) {
    try {
      const token = jwt.sign(data, process.env.SECRET, {
        // expiresIn: "2h",
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = AuthServices;
