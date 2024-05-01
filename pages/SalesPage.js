import React, { useState } from 'react';
import Sales from '../components/Sales';

const SalesPage = () => {
  const [deals, setDeals] = useState([
    { id: 1, name: 'Brake Pad Replacement', discount: 20 },
    { id: 2, name: 'Oil Change Package', discount: 15 },
    { id: 3, name: 'Tire Rotation and Balancing', discount: 10 },
  ]);

  const addDeal = (deal) => {
    setDeals([...deals, { id: Date.now(), ...deal }]);
  };

  const deleteDeal = (id) => {
    setDeals(deals.filter((deal) => deal.id !== id));
  };

  return (
    <div>
      <h2>Sales</h2>
      <Sales deals={deals} addDeal={addDeal} deleteDeal={deleteDeal} />
      <p>
        Check out our latest sales and promotions on car parts, accessories, and service packages. Don't miss out on great deals!
      </p>
    </div>
  );
};

export default SalesPage;