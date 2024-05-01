import React, { useState } from 'react';
import Inventory from '../components/Inventory';

const InventoryPage = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Air Filter', brand: 'Honda', price: 15.99 },
    { id: 2, name: 'Brake Pads', brand: 'Toyota', price: 29.99 },
    { id: 3, name: 'Spark Plugs', brand: 'Ford', price: 12.99 },
  ]);

  const addPart = (part) => {
    setInventory([...inventory, { id: Date.now(), ...part }]);
  };

  const deletePart = (id) => {
    setInventory(inventory.filter((part) => part.id !== id));
  };

  return (
    <div>
      <h2>Inventory</h2>
      <Inventory inventory={inventory} addPart={addPart} deletePart={deletePart} />
      <p>
        We maintain a well-stocked inventory of genuine parts and accessories for all major car brands. Browse our inventory to find the right parts for your vehicle.
      </p>
    </div>
  );
};

export default InventoryPage;