const express = require('express');
const router = express.Router();

const storesCtrl = require('../controllers/store');

router.get('/:storeId', storesCtrl.getStore);
router.post('/:storeId', storesCtrl.createStore);
router.patch('/:storeId', storesCtrl.patchStore);
router.delete('/:storeId', dstoresCtrl.eleteStore);

module.exports = router;
