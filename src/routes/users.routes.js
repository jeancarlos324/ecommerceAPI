const { Router } = require("express");
const { getAllUser, createUser } = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

router.get("/users", authenticate, getAllUser);
router.post("/users", createUser);

module.exports = router;
