import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Characters from './Characters';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/characters" component={Characters} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
