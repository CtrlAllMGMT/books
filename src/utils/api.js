// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getInventory = async () => {
  const response = await api.get('/inventory');
  return response.data;
};

export const createInventoryItem = async (item) => {
  const response = await api.post('/inventory', item);
  return response.data;
};

export const updateInventoryItem = async (id, item) => {
  const response = await api.put(`/inventory/${id}`, item);
  return response.data;
};

export const deleteInventoryItem = async (id) => {
  await api.delete(`/inventory/${id}`);
};

// ... (add more API functions for invoicing, sales, etc.)

export default api;