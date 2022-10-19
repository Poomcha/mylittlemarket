const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/product');

router.get('/:productId', productsCtrl.getProduct);
router.post('/:productId', productsCtrl.createProduct);
router.patch('/:productId', productsCtrl.patchProduct);
router.delete('/:productId', productsCtrl.deleteProduct);

module.exports = router;
