const SaleModel = require('../models/saleModel');

// Controller functions for sales

// Get all sales
exports.getSales = async (req, res) => {
  try {
    const sales = await SaleModel.find();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new sale
exports.createSale = async (req, res) => {
  try {
    const newSale = new SaleModel(req.body);
    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an existing sale
exports.updateSale = async (req, res) => {
  try {
    const updatedSale = await SaleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedSale);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a sale
exports.deleteSale = async (req, res) => {
  try {
    await SaleModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Sale deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};