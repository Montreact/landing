import React from 'react';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';
import LogoTitle from '../images/logo_title.png';
import Tippy from '@tippy.js/react';
import LineItem from './shopify/LineItem';
import 'tippy.js/dist/tippy.css';
import store from '../store';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
  }

  onLocaleToggle() {
    const locale = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(locale);
    this.forceUpdate();
  }

  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id;
    const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }];
    state.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      store.dispatch({ type: 'UPDATE_QUANTITY_IN_CART', payload: { checkout: res } });
    });
  }
  removeLineItemInCart(lineItemId) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id;
    state.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      store.dispatch({ type: 'REMOVE_LINE_ITEM_IN_CART', payload: { checkout: res } });
    });
  }
  handleCartClose() {
    store.dispatch({ type: 'CLOSE_CART' });
  }
  handleCartOpen() {
    store.dispatch({ type: 'OPEN_CART' });
  }

  render() {
    const localeToggle = i18n.language === 'en' ? 'French' : 'English';
    const t = this.props.t;
    const user = this.props.user;
    const state = store.getState();

    let line_items = state.checkout.lineItems.map(line_item => {
      return (
        <LineItem
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });
    return (
      <header id='header' className='nav-bar animated fadeInDown delay-05s'>
        <a className='nav-title-container' href='#'>
          <img alt='logo-title' className='nav-title' src={LogoTitle} />
        </a>

        <nav>
          {line_items.length > 0 && (
            <Tippy
              className='cart-container'
              boundary='window'
              showOnCreate
              placement='bottom-start'
              trigger='click'
              interactive
              arrow={false}
              content={
                <div className={`Cart ${state.isCartOpen ? 'Cart--open' : ''}`}>
                  <center>
                    <header className='Cart__header'>
                      <h2>Your cart</h2>
                    </header>
                  </center>
                  <ul className='Cart__line-items'>{line_items}</ul>
                  <footer className='Cart__footer'>
                    <div className='Cart-info clearfix'>
                      <div className='Cart-info__total Cart-info__small'>Subtotal</div>
                      <div className='Cart-info__pricing'>
                        <span className='pricing'>$ {state.checkout.subtotalPrice}</span>
                      </div>
                    </div>
                    <div className='Cart-info clearfix'>
                      <div className='Cart-info__total Cart-info__small'>Taxes</div>
                      <div className='Cart-info__pricing'>
                        <span className='pricing'>$ {state.checkout.totalTax}</span>
                      </div>
                    </div>
                    <div className='Cart-info clearfix'>
                      <div className='Cart-info__total Cart-info__small'>Total</div>
                      <div className='Cart-info__pricing'>
                        <span className='pricing'>$ {state.checkout.totalPrice}</span>
                      </div>
                    </div>
                    <center>
                      <a href={state.checkout.webUrl} className='btn-purple'>
                        Checkout
                      </a>
                    </center>
                  </footer>
                </div>
              }
            >
              <a onClick={this.handleCartOpen}>
                <i className='fa fa-shopping-cart' />
                {line_items.length}
              </a>
            </Tippy>
          )}

          <a href='mailto:montreact@gmail.com'>{t('letsTalk')}</a>
          <a href='#plans'>Plans</a>
          <a onClick={() => this.onLocaleToggle()} onKeyDown={() => this.onLocaleToggle()}>
            {localeToggle}
          </a>
        </nav>
      </header>
    );
  }
}

export default withTranslation()(Nav);
