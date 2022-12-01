const { Router } = require("express");
const {
  addToCart,
  updatePriceCart,
  getCart,
  purchasedCart,
} = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");
const router = Router();

router.post("/cart", authenticate, addToCart, updatePriceCart);
router.get("/cart", authenticate, getCart);
router.post("/purchase", authenticate, purchasedCart);
module.exports = router;
