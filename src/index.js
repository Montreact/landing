import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './translations/i18n';
import App from './App';
import Client from 'shopify-buy';
import { Provider } from 'react-redux';
import store from './store';

const client = Client.buildClient({
  domain: 'montreact.myshopify.com',
  storefrontAccessToken: '72bcdcc552a40836ee74183e08c491c2',
});
store.dispatch({ type: 'CLIENT_CREATED', payload: client });

// buildClient() is synchronous, so we can call all these after!
client.product.fetchAll().then(res => {
  store.dispatch({ type: 'PRODUCTS_FOUND', payload: res });
});
client.checkout.create().then(res => {
  store.dispatch({ type: 'CHECKOUT_FOUND', payload: res });
});
client.shop.fetchInfo().then(res => {
  store.dispatch({ type: 'SHOP_FOUND', payload: res });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
