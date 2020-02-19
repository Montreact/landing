import React, { Component, useContext } from "react";
import { Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import { Auth0Context } from './components/Auth.js'; 
import "./style/base.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Account from "./components/Account";
import Generic from "./components/Generic";
import Elements from "./components/Elements";
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  const auth0 = useContext(Auth0Context); 
  return (
    <HashRouter>
      <Nav auth0={auth0} /> 
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={() => <Account auth0={auth0} /> }/> 
        <Route exact path="/generic" component={Generic} />
        <Route exact path="/elements" component={Elements} />
      </Switch>
      <MessengerCustomerChat
        pageId="105134164415024"
        appId="190910228935872"
      />
    </HashRouter>
  );
}

export default App;