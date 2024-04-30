import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get('/api/sales');
        setSales(response.data);
      } catch (error) {
        console.error('Error fetching sales:', error);
      }
    };

    fetchSales();
  }, []);

  return (
    <div>
      <h2>Sales</h2>
      <ul>
        {sales.map((sale) => (
          <li key={sale._id}>
            {sale.customerName} - Total: {sale.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;