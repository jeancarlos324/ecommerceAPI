const { Router } = require("express");
const { userLogin } = require("../controllers");

const router = Router();
/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login to my aplicaction
 *     tags: [Login]
 *     requestBody:
 *       description: Login and generate a Token to acces to another endpoints
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       201:
 *         description: logged
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
 *                     $ref: "#/components/schemas/token"
 */
router.post("/auth/login", userLogin);

module.exports = router;
