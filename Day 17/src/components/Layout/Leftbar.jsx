import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from './Topbar';
import Leftbar from './Leftbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Users from './Users';

function Layout() {
  return (
    <Router>
      <div className='App'>
        <div className='Appbar'>
          <Topbar />
          <Leftbar />
        </div>

        {/* Route Configuration */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default Layout;
