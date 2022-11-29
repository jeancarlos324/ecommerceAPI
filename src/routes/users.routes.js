const { Router } = require("express");
const {
  getAllUser,
  createUser,
  getAllProductsByUser,
} = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

router.get("/users", authenticate, getAllUser);
router.post("/users", createUser);
router.get("/users/:userId/products", getAllProductsByUser);

module.exports = router;
