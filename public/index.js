import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/global.css';
import './styles/components.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import InvoicingPage from './pages/InvoicingPage';
import SalesPage from './pages/SalesPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/invoicing">Invoicing</Link>
              </li>
              <li>
                <Link to="/sales">Sales</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/inventory" component={InventoryPage} />
          <Route path="/invoicing" component={InvoicingPage} />
          <Route path="/sales" component={SalesPage} />
        </Switch>

        <Footer>
          <p>&copy; Car Service Center Management</p>
        </Footer>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
