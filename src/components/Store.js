import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import store from '../store';
import Products from './shopify/Products';
var _ = require('lodash');

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }

  addVariantToCart(variantId, quantity) {
    const state = store.getState(); // state from redux store
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = state.checkout.id;
    state.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      store.dispatch({ type: 'ADD_VARIANT_TO_CART', payload: { isCartOpen: true, checkout: res } });
    });
  }

  render() {
    const state = store.getState(); // state from redux store
    let oProducts = <Products products={state.products} client={state.client} addVariantToCart={this.addVariantToCart} />;
    return (
      <div id='page-wrapper'>
        {/* <!-- Wrapper --> */}
        <section id='wrapper' className='store'>
          <div className='wrapper team-wrapper'>
            <div className='inner'>
              <h3 className='major'>Welcome to our example e-commerce store built with Shopify</h3>
            </div>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <section id='footer'>
          <div className='inner'>
            {oProducts}

            <ul className='copyright'>
              <li>&copy; Montreact</li>
              <li>
                Design: <a href='http://html5up.net'>HTML5 UP</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(state => state)(withTranslation()(Store));
