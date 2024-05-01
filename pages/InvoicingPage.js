import React, { useState } from 'react';
import Invoicing from '../components/Invoicing';

const InvoicingPage = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, date: '2023-04-15', customer: 'John Doe', total: 249.99, items: [
      { name: 'Air Filter', brand: 'Honda', price: 15.99, quantity: 1 },
      { name: 'Brake Pads', brand: 'Toyota', price: 29.99, quantity: 2 },
      { name: 'Oil Change', price: 39.99, quantity: 1 },
    ]},
    { id: 2, date: '2023-04-20', customer: 'Jane Smith', total: 89.99, items: [
      { name: 'Spark Plugs', brand: 'Ford', price: 12.99, quantity: 4 },
      { name: 'Tire Rotation', price: 19.99, quantity: 1 },
    ]},
    { id: 3, date: '2023-04-25', customer: 'Bob Johnson', total: 149.99, items: [
      { name: 'Battery', brand: 'Duracell', price: 79.99, quantity: 1 },
      { name: 'Wiper Blades', price: 9.99, quantity: 2 },
    ]},
  ]);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, { id: Date.now(), ...invoice }]);
  };

  const deleteInvoice = (id) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  };

  return (
    <div>
      <h2>Invoicing</h2>
      <Invoicing invoices={invoices} addInvoice={addInvoice} deleteInvoice={deleteInvoice} />
      <p>
        Our invoicing system ensures transparent and accurate billing for all services and parts. View and manage your invoices here.
      </p>
    </div>
  );
};

export default InvoicingPage;