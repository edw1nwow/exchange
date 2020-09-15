import React from 'react';
import './App.css';
import  ExchangeCard from './components/exchange-card';
import state from './model/state';
import ListCcy from './components/list-ccy'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='App'>
      <Switch>
    <Route path='/' exact component={ExchangeCard} state={state}/>
    <Route path='/list-ccy' component={ListCcy}/>
    <Route path='/exchange' component={ExchangeCard}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
