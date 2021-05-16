import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
