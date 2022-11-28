const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/product');

router.get('/:productId', productsCtrl.getProductById);
router.get('/', productsCtrl.getProducts);
router.post('/', productsCtrl.createProduct);
router.patch('/:productId', productsCtrl.patchProduct);
router.delete('/:productId', productsCtrl.deleteProduct);

module.exports = router;
