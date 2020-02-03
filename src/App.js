import React, { Component, useContext } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "./style/base.scss";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import { Auth0Context } from './contexts/auth0-context'; 

function App() {
  const auth0 = useContext(Auth0Context); 
  return (
    <BrowserRouter>
      {/* <NavBar auth0={auth0}/> */}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;