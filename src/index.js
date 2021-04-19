import About from './components/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Intro from './components/Intro';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Intro} exact />
      <Route path="/about" component={About} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
