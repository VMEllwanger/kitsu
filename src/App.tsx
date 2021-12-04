import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Home } from './pages';
import { Global } from './styles/global';

function App(): JSX.Element {
  return (
    <Router>
      <Global />
      <Switch>
        <Route key="/animes/:id" exact path="/animes/:id">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/animes/0" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
