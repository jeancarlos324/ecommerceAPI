const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
} = require("../controllers");
// const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:productId", getProductsById);
router.post("/products", createProduct);
router.put("/products/:productId", updateProduct);
router.delete("/products/:productId", deleteProduct);

module.exports = router;
