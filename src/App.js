import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './redux/store';
import { HomePage, ContactPage, ArticlePage } from './pages';

const App = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/article/:id(\d+)' component={ArticlePage} />
      </Switch>
    </BrowserRouter>
  </Provider>
;

export default App;
