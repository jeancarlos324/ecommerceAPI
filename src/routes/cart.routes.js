const { Router } = require("express");
const { addToCart } = require("../controllers");

const router = Router();

router.post("/cart", addToCart);

module.exports = router;
