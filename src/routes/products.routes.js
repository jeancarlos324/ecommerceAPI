const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
} = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

/**
 * @openapi
 * /api/v1/products/{id}:
 *   get:
 *     summary: Get products by id from Ecommerce API
 *     tags: [Products]
 *     description: You just need to send the request
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/product"
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/product"
 *   put:
 *     summary: update product by id from Ecommerce API
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     requestBody:
 *       description: Login and generate a Token to acces to another endpoints
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/updateProduct"
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/updateProduct"
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 * /api/v1/products:
 *   get:
 *     summary: Get all products from Ecommerce API
 *     tags: [Products]
 *     description: You just need to send the request
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/product"
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/product"
 *   post:
 *     summary: Register product with owner
 *     tags: [Products]
 *     requestBody:
 *       description: To register a new product you need a name, price, availableQty, image, status userId
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerProduct"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/registerProduct"
 */

router.get("/products", getAllProducts);
router.get("/products/:productId", getProductsById);
router.post("/products", authenticate, createProduct);
router.put("/products/:productId", authenticate, updateProduct);
router.delete("/products/:productId", authenticate, deleteProduct);

module.exports = router;
