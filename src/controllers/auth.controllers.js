const { AuthServices } = require("../services");

const userLogin = async (request, response, next) => {
  try {
    const credentials = request.body;
    const result = await AuthServices.autenthicate(credentials);
    if (!result) {
      response.status(400).json({ message: "Invalid Email" });
    } else if (!result.verifyAuth) {
      response.status(400).json({ message: "Invalid Password" });
    } else {
      const { dataValues } = result.query;
      const token = AuthServices.getToken({ ...dataValues });
      const user = { ...dataValues, token };
      response.json(user);
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error.message,
      message: "Invalid Token Auth",
    });
  }
};

module.exports = { userLogin };
