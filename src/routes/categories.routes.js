const { Router } = require("express");
const {
  getAllCategories,
  createCategory,
} = require("../controllers");

const router = Router();

router.get("/categories", getAllCategories);
router.post("/categories", createCategory);

module.exports = router;
