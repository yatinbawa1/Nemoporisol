const express = require("express");

const router = express.Router();
const shopController = require("../controllers/shopController");

router.get("/", shopController.getIndexPage);
router.get("/product-list", shopController.getProductListPage);
router.get("/product/:productId", shopController.getProductDetailPage);
router.get("/cart", shopController.getCartPage);
router.get("/checkout", shopController.getCheckoutPage);

module.exports = router;
