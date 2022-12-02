const { Router } = require("express");
const {
  getAllUser,
  createUser,
  getAllProductsByUser,
  updateUser,
} = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: Get all users from DB
 *     tags: [Users]
 *     description: You just need to send the request
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/users"
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
 *                     $ref: "#/components/schemas/users"
 *   post:
 *     summary: Register a new user into the app
 *     tags: [Users]
 *     description: To register a new user you need a user_name, email and password
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/register"
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
 *                     $ref: "#/components/schemas/users"
 */

router.get("/users", authenticate, getAllUser);
router.post("/users", createUser);
router.get("/users/:userId/products", authenticate, getAllProductsByUser);
router.patch("/users/:id", authenticate, updateUser);

module.exports = router;
