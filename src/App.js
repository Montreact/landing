import React, { Component, useContext } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Auth0Context } from './contexts/auth0-context'; 
import "./style/base.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Generic from "./components/Generic";
import Elements from "./components/Elements";

function App() {
  const auth0 = useContext(Auth0Context); 
  return (
    <BrowserRouter>
      <Nav auth0={auth0} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/generic" component={Generic} />
        <Route exact path="/elements" component={Elements} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;