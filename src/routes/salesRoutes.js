const express = require('express');
const router = express.Router();
const { getSales, createSale, updateSale, deleteSale } = require('../controllers/salesController');

// Routes for sales
router.get('/', getSales);
router.post('/', createSale);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);

module.exports = router;