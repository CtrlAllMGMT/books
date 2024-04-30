// src/components/Inventory.js
import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Input, Button } from '../styles/StyledComponents';
import { getInventory, createInventoryItem, updateInventoryItem, deleteInventoryItem } from '../utils/api';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await getInventory();
        setInventory(data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();
  }, []);

  const handleCreateItem = async (e) => {
    e.preventDefault();
    const item = { name, description, quantity, price };
    try {
      const newItem = await createInventoryItem(item);
      setInventory([...inventory, newItem]);
      setName('');
      setDescription('');
      setQuantity(0);
      setPrice(0);
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      const item = await updateInventoryItem(updatedItem._id, updatedItem);
      setInventory(inventory.map((i) => (i._id === item._id ? item : i)));
      setEditingItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteInventoryItem(itemId);
      setInventory(inventory.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <Container>
      <h2>Inventory</h2>
      {editingItem ? (
        <Form>
          <Input
            type="text"
            placeholder="Name"
            value={editingItem.name}
            onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Description"
            value={editingItem.description}
            onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Quantity"
            value={editingItem.quantity}
            onChange={(e) => setEditingItem({ ...editingItem, quantity: parseInt(e.target.value, 10) })}
          />
          <Input
            type="number"
            placeholder="Price"
            value={editingItem.price}
            onChange={(e) => setEditingItem({ ...editingItem, price: parseFloat(e.target.value) })}
          />
          <Button type="submit" onClick={() => handleUpdateItem(editingItem)}>
            Update
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handleCreateItem}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <Input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <Button type="submit">Create</Button>
        </Form>
      )}
      {inventory.map((item) => (
        <Card key={item._id}>
          <h3>{item.name}</h3>
          <p>Description: {item.description}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <Button onClick={() => setEditingItem(item)}>Edit</Button>
          <Button onClick={() => handleDeleteItem(item._id)}>Delete</Button>
        </Card>
      ))}
    </Container>
  );
};

export default Inventory;