// src/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my-garage-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
const inventoryRoutes = require('./routes/inventoryRoutes');
const invoicingRoutes = require('./routes/invoicingRoutes');
const salesRoutes = require('./routes/salesRoutes');

app.use('/api/inventory', inventoryRoutes);
app.use('/api/invoicing', invoicingRoutes);
app.use('/api/sales', salesRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});