 const express = require('express');

const router = express.Router();
const shopController = require("../controllers/shopController");

// The Routers functionality is placed in 
// products page because it access products 
// to be displayed
// will change it afterwords

router.get('/',shopController.getIndexPage);
router.get('/product-list',shopController.getProductListPage);
router.get('/product/:productId',shopController.getProductDetailPage)

module.exports = router;