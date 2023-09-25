// Router.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Leftbar from './Leftbar';
import ContentPage from './ContentPage';

function AppRouter() {
  return (
    <Router>
      <Switch>        <Route path="/" exact component={<LoginPage/>} />
        <Route path="/sidebar" component={<Sidebar/>} />
        <Route path="/footer" component={<Footer/>} />
        <Route path="/Leftbar" component={<Leftbar/>} />
        <Route path="/content" component={<ContentPage/>} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
