import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import SignUp from './pages/sign-up/sign-up.component';
import Login from './pages/Login/Login';

import Nav from './components/nav/nav.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/signup'} component={SignUp} />
        <Route exact path={'/login'} component={Login} />

      </Switch>
    </div>
  );
}

export default App;
