import React, { Component, useContext } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "./style/base.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Generic from "./components/Generic";
import Elements from "./components/Elements";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/generic" component={Generic} />
        <Route exact path="/elements" component={Elements} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;