import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Topbar from './Topbar';
import Leftbar from './Leftbar';
import Home from './Home'; // Import your other page components

function Layout() {
  return (
    <Router>
      <div className='App'>
        <div className='Appbar'>
          <Topbar />
          <Leftbar />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            {/* Add more navigation links */}
          </ul>
        </nav>

        {/* Route Configuration */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          {/* Add more routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default Layout;

// Define your other page components (e.g., Dashboard)
function Dashboard() {
  return <h2>Dashboard Page</h2>;
}
