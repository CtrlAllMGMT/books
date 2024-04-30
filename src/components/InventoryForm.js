import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const InventoryForm = ({ onSubmit, initialItem, onUpdate }) => {
  const [name, setName] = useState(initialItem?.name || '');
  const [description, setDescription] = useState(initialItem?.description || '');
  const [quantity, setQuantity] = useState(initialItem?.quantity || 0);
  const [price, setPrice] = useState(initialItem?.price || 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = { name, description, quantity, price };
    try {
      if (initialItem) {
        await axios.put(`/api/inventory/${initialItem._id}`, item);
        onUpdate(item);
      } else {
        await axios.post('/api/inventory', item);
        onSubmit(item);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <button type="submit">{initialItem ? 'Update' : 'Create'}</button>
    </form>
  );
};

InventoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialItem: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
};


export default InventoryForm;