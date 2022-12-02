const { Router } = require("express");
const { userLogin } = require("../controllers");

const router = Router();
/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login int Ecommerce App
 *     tags: [Login]
 *     description: You just need to send the request
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/login"
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
 *                     $ref: "#/components/schemas/login"
 */
router.post("/auth/login", userLogin);

module.exports = router;
