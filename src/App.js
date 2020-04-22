import React from "react";
import { Switch, Route, HashRouter } from 'react-router-dom';
import "./style/base.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Team from "./components/Team";
import Store from "./components/Store";
import Generic from "./components/Generic";
import Elements from "./components/Elements";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce("pk_1771027cff689ca2040c9c4b403a1f6fc92c8b56b688b");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      products: null,
      cart: null,
      loadingCart: true    
    };
    this.addToCart = this.addToCart.bind(this);
    this.fetchCart = this.fetchCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    //COMMERCE.js GET CART
    this.fetchCart().then(() => this.setState({ loadingCart: false }));
    commerce.products.list().then(res => {
      this.setState({products: res.data});
    });

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

  addToCart(product) {
    commerce.cart.add(product.id, 1)
      .then(res => this.setState({ cart: res.cart }))
      .catch(error => console.error('Failed to add to cart!', error));
  }

  fetchCart() {
    return commerce.cart.retrieve()
      .then(cart => this.setState({ cart }))
      .catch(error => console.error('Failed to retrieve cart!', error));
  };

  emptyCart() {
    commerce.cart.empty()
    .then(cart => this.setState({ cart }))
    .catch(error => console.error('Failed to retrieve cart!', error));
  }

  removeItem(line_itemId) {
    commerce.cart.remove(line_itemId)
    .then(cart => this.setState({ cart }))
    .catch(error => console.error('Failed to retrieve cart!', error));
  }

  render() {
    console.log(this.state.cart)
    return (
      <HashRouter>
        <Nav login={this.login} logout={this.logout} user={this.state.user} cart={this.state.cart} emptyCart={this.emptyCart} removeItem={this.removeItem} /> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={() => <Team user={this.state.user} /> }/>
          <Route exact path="/store" component={() => <Store user={this.state.user} commerce={commerce} addToCart={this.addToCart} products={this.state.products} /> }/>
          <Route exact path="/generic" component={Generic} />
          <Route exact path="/elements" component={Elements} />
        </Switch>
        <MessengerCustomerChat pageId="105134164415024" appId="190910228935872"/>
      </HashRouter>
    );
  }

}

export default App;