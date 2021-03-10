const express = require('express');
const { ViewAllProducts, ViewProduct, Create, EditProduct, DeleteProduct } = require('../controllers/auth');
const router = express.Router();

router.get("/", ViewAllProducts);
router.get("/:id", ViewProduct);
router.post("/create", Create);
router.post("/edit/:id", EditProduct);
router.delete("/delete/:id", DeleteProduct);

module.exports = router;