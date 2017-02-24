// Libraries
import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

// Components
import App from './components/App.jsx';
import About from './components/About.jsx';

// Styles
import './stylesheets/App.css';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={About} />
    </Route>
  </Router>
);

export default routes;
