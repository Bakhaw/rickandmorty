import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Character from '../screens/Character';
import Home from '../screens/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/character/:characterId' component={Character} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
