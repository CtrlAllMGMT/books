import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Invoicing = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('/api/invoicing');
        setInvoices(response.data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice._id}>
            {invoice.customerName} - Total: {invoice.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invoicing;