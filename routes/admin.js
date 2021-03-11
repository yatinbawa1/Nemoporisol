const express = require('express');

const router = express.Router();
const adminControllers = require('../controllers/adminController');

router.get('/admin/add-product',adminControllers.getAddProductPage);
router.get('/admin',adminControllers.getAdminPage);
router.post('/admin/add-product',adminControllers.addNewProduct);

module.exports = router;

