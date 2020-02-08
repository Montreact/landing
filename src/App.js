import React, { Component, useContext } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "./style/base.scss";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;