// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Inventory from './components/Inventory';
import Invoicing from './components/Invoicing';
import Sales from './components/Sales';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/inventory" component={Inventory} />
          <PrivateRoute path="/invoicing" component={Invoicing} />
          <PrivateRoute path="/sales" component={Sales} />
          <Route path="/">
            <h1>Welcome to My Garage Website</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;