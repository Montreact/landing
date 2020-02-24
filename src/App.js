import React, { Component } from "react";
import { Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import "./style/base.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Account from "./components/Account";
import Generic from "./components/Generic";
import Elements from "./components/Elements";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import FacebookLogin from 'react-facebook-login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  login = (user) => {
    this.setState({ user: user });
  }

  logout = () => {
    this.setState({ user: {} });
  }

  render() {
    return (
      <HashRouter>
        <div className="facebook-login">
          <FacebookLogin appId="190910228935872"/>
        </div>
        <Nav login={this.login} logout={this.logout}  user={this.state.user} /> 
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={() => <Account user={this.state.user} /> }/>
          <Route exact path="/generic" component={Generic} />
          <Route exact path="/elements" component={Elements} />
        </Switch>
        <MessengerCustomerChat pageId="105134164415024" appId="190910228935872"/>
      </HashRouter>
    );
  }

}

export default App;