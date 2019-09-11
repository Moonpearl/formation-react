import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage, ContactPage } from './pages';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/contact' component={ContactPage} />
    </Switch>
  </BrowserRouter>
;

export default App;
