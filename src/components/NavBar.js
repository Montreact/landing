import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  constructor (props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.auth0.logout();
    this.forceUpdate();
  }

  render() {
    
      return (
        <header id="header">
            <h1><a href="./">Montreact</a></h1>
            <nav>
              { this.props.auth0.isAuthenticated ? 
                <>
                  <NavLink to="/account"><button className="button is-danger btn-account">Account</button></NavLink>
                  <button onClick={this.logout} className="button is-danger">Logout</button>
                </>
              : 
                <button onClick={this.props.auth0.loginWithRedirect} className="button is-danger">Login</button> 
              }
            </nav>
        </header>
      )
  }
}