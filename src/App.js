import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import BusinessInfo from './pages/BusinessInfo';
import BusinessFinance from './pages/BusinessFinance';
import BusinessBasics from './pages/BusinessBasics';
import Result from './pages/Results';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/BusinessInfo' component={BusinessInfo} />
        <Route exact path='/BusinessBasics' component={BusinessBasics} />
        <Route exact path='/BusinessFinance' component={BusinessFinance} />
        <Route exact path='/results' component={Result} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
