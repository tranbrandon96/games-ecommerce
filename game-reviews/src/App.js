import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const ActionPage = () => (
  <div>
    <h1>ACTION PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/action' component={ActionPage} />
      </Switch>
    </div>
  );
}

export default App;