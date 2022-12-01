const { Router } = require("express");
const { getAllCategories, createCategory } = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

router.get("/categories", getAllCategories);
router.post("/categories", authenticate, createCategory);

module.exports = router;
