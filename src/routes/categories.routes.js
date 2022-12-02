const { Router } = require("express");
const { getAllCategories, createCategory } = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

/**
 * @openapi
 * /api/v1/categories:
 *   get:
 *     summary: Get all categories from Ecommerce API
 *     tags: [Category]
 *     description: You just need to send the request
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/category"
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
 *                     $ref: "#/components/schemas/category"
 *   post:
 *     summary: create Categories
 *     tags: [Category]
 *     description: You just need to send the request
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/category"
 *     responses:
 *       201:
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
 *                     $ref: "#/components/schemas/category"
 */

router.get("/categories", getAllCategories);
router.post("/categories", authenticate, createCategory);

module.exports = router;
