import React, { Component, createContext, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

// create the context
export const Auth0Context = createContext();
export const useAuth0 = () => useContext(Auth0Context);

// create a provider
export class Auth0Provider extends Component {
	state = {
		auth0Client: null,
		authClientCreated: false,
		isLoading: true,
		isAuthenticated: false,
		user: null
	};
	
	config = {
		domain: 'montreact.auth0.com',
		client_id: 'bMo8YsyFdKLltjz1oDrzTK3Cpm4k994r',
		redirect_uri: window.location.origin + '/#/'
	};

	componentDidMount() {
		this.initializeAuth0();
  }

	// initialize the auth0 library
	initializeAuth0 = () => {
    createAuth0Client(this.config).then(auth0Client => {
      this.setState({ auth0Client: auth0Client, authClientCreated: true });
      // check to see if they have been redirected after login
      if (window.location.search.includes('code=')) {
        return this.handleRedirectCallback();
      }

      auth0Client.isAuthenticated().then(isAuthenticated => {
        if (isAuthenticated) {
          auth0Client.getUser().then(user => {
            this.setState({ isLoading: false, isAuthenticated, user });
          })
        } else return null
      })
    });

	};

	handleRedirectCallback = () => {
		this.setState({ isLoading: true });
		this.state.auth0Client.handleRedirectCallback().then(() => {
      this.state.auth0Client.getUser().then((user) => {
        this.setState({ user, isAuthenticated: true, isLoading: false });
        window.history.replaceState({}, document.title, window.location.pathname);
      })
    })
	};

	render() {
		const { auth0Client, isLoading, isAuthenticated, user, authClientCreated } = this.state;
		const { children } = this.props;

		const configObject = {
			authClientCreated,
			isLoading,
			isAuthenticated,
			user,
			loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
			getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
			getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
			logout: (...p) => auth0Client.logout(...p)
		};

		return <Auth0Context.Provider value={configObject}>{children}</Auth0Context.Provider>;
	}
}