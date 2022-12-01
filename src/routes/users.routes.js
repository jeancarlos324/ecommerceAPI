const { Router } = require("express");
const {
  getAllUser,
  createUser,
  getAllProductsByUser,
  updateUser,
} = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

router.get("/users", authenticate, getAllUser);
router.post("/users", createUser);
router.get("/users/:userId/products", authenticate, getAllProductsByUser);
router.patch("/users/:id", authenticate, updateUser);

module.exports = router;
