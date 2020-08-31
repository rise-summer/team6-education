import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './view/Login/LoginPage'
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage}/>
      </Switch>
    </div>
  );
}

export default App;
