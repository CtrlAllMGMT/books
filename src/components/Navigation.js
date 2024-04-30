import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventory">Inventory</NavLink>
        </li>
        <li>
          <NavLink to="/invoicing">Invoicing</NavLink>
        </li>
        <li>
          <NavLink to="/sales">Sales</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;