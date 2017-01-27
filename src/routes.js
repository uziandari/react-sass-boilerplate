import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/Home/index';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
  </Router>
);

export default Routes;
