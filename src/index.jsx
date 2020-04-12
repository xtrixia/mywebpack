import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// import Header from './components/Header';
const Content0 = lazy(() => import('./components/0-Content'));
const Content1 = lazy(() => import('./components/1-Content'));

import './styles/style.scss';
import './styles/something.scss';

render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <h1>HOME</h1>
      <Link to='/0'>Konten 0</Link>
      <Link to='/1'>Konten 1</Link>
      <Switch>
        <Route exact path='/0' component={Content0} />
        <Route exact path='/1' component={Content1} />
      </Switch>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('app')
);
