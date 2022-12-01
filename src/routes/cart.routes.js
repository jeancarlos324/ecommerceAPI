const { Router } = require("express");
const {
  addToCart,
  updatePriceCart,
  getCart,
  purchasedCart,
  removeToCart,
} = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");
const router = Router();

router.post("/cart", authenticate, addToCart, updatePriceCart);
router.get("/cart", authenticate, getCart);
router.post("/purchase", authenticate, purchasedCart);
router.delete("/cart/:id", authenticate, removeToCart, updatePriceCart);
module.exports = router;
