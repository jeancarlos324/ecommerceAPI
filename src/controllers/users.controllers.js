const { UserServices } = require("../services");
const welcomeTemplate = require("../template/wellcome");
const transporter = require("../utils/mailer");

const createUser = async (request, response, next) => {
  try {
    const newUser = request.body;
    const result = await UserServices.create(newUser);
    response.status(201).json(result);
    transporter.sendMail({
      from: "<jecar324@gmail.com>",
      to: result.email,
      subject: "Wellcome to Ecommerce API",
      text: `Wellcome ${result.username} to Ecommerce API`,
      html: welcomeTemplate(result.firstName, result.lastName),
    });
  } catch (error) {
    next({
      errorContent: error,
      status: 400,
      message: "Failed to create user",
    });
  }
};

const getAllUser = async (request, response, next) => {
  try {
    const result = await UserServices.getAll();
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Could not get all users",
    });
  }
};

const getAllProductsByUser = async (request, response, next) => {
  try {
    const { userId } = request.params;
    const result = await UserServices.getProduct(userId);
    response.json(result);
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: "Could not get all products by User",
    });
  }
};

const updateUser = async (request, response, next) => {
  const { id } = request.params;
  const keyData = ["password", "firstName", "lastName", "username"];
  const parseKeyRequire = JSON.stringify(keyData);
  try {
    const updateData = request.body;
    const keyUpdates = Object.keys(updateData);
    const parseUpdateUser = JSON.stringify(keyUpdates);

    if (parseUpdateUser === parseKeyRequire) {
      const result = await UserServices.update({ id, ...updateData });
      response.json(result);
    } else {
      response
        .json({ mesage: `Enter the data correctly ${parseKeyRequire}` })
        .status(400);
    }
  } catch (error) {
    next({
      errorContent: error.message,
      status: 400,
      message: `Could not updated User id: ${id}`,
    });
  }
};
module.exports = { createUser, getAllUser, getAllProductsByUser, updateUser };
