const InvoiceModel = require('../models/invoiceModel');

// Controller functions for invoicing

// Get all invoices
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await InvoiceModel.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const newInvoice = new InvoiceModel(req.body);
    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an existing invoice
exports.updateInvoice = async (req, res) => {
  try {
    const updatedInvoice = await InvoiceModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedInvoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an invoice
exports.deleteInvoice = async (req, res) => {
  try {
    await InvoiceModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Invoice deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};