const express = require('express');
const router = express.Router();

const sellersCtrl = require('../controllers/seller');

router.get('/:sellerId', sellersCtrl.getSeller);
router.post('/:sellerId', sellersCtrl.createSeller);
router.patch('/:sellerId', sellersCtrl.patchSeller);
router.delete('/:sellerId', sellersCtrl.deleteSeller);

module.exports = router;
