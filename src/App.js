import React, { Component, useContext } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "./style/base.scss";
import Home from "./components/Home";
import OldSite from "./components/OldSite";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/old" component={OldSite} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;