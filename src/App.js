import React from "react";
import { Switch, Route, HashRouter } from 'react-router-dom';
import "./style/base.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Team from "./components/Team";
import Generic from "./components/Generic";
import Elements from "./components/Elements";
import MessengerCustomerChat from 'react-messenger-customer-chat';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({ appId: '190910228935872', cookie: true, xfbml: true, version: 'v2.1' });
  
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', {fields: 'id,name,picture,email'}, function(user) {
            console.log('Successful login for: ' + user.name);
            this.setState({ user: user });
          }.bind(this));
        }
      }.bind(this));
    }.bind(this);
  
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  
  login = () => {
    FB.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', {fields: 'id,name,picture,email'}, function(user) {
          console.log('Successful login for: ' + user.name);
          this.setState({ user: user });
        }.bind(this));
      }
    }.bind(this));
  }

  logout = () => {
    FB.logout(function(response) {
      console.log('Successful logout');
      this.setState({ user: {} });
    }.bind(this));
  }

  render() {
    return (
      <HashRouter>
        <Nav login={this.login} logout={this.logout} user={this.state.user} /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={() => <Team user={this.state.user} /> }/>
          <Route exact path="/generic" component={Generic} />
          <Route exact path="/elements" component={Elements} />
        </Switch>
        <MessengerCustomerChat pageId="105134164415024" appId="190910228935872"/>
      </HashRouter>
    );
  }

}

export default App;