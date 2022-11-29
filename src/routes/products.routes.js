const { Router } = require("express");
const { createProduct } = require("../controllers");
// const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

// router.get("/products");
router.post("/products", createProduct);

module.exports = router;
