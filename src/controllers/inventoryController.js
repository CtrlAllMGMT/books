const InventoryModel = require('../models/inventoryModel');

// Controller functions for inventory

// Get all inventory items
exports.getInventory = async (req, res) => {
  try {
    const inventory = await InventoryModel.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new inventory item
exports.addInventory = async (req, res) => {
  try {
    const newItem = new InventoryModel(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an existing inventory item
exports.updateInventory = async (req, res) => {
  try {
    const updatedItem = await InventoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an inventory item
exports.deleteInventory = async (req, res) => {
  try {
    await InventoryModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};