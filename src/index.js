import React, { Component } from "react";
import ReactDOM from "react-dom";
import './translations/i18n';
import App from './App';
import { Auth0Provider } from './components/Auth';

ReactDOM.render(
  <Auth0Provider>
    <App />
  </Auth0Provider>
  ,document.getElementById("app")
);