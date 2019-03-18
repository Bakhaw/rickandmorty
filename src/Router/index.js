import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/artist/:artistId' component={Artist} /> */}
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
