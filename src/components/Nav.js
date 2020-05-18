import React from 'react';
import i18n from "i18next";
import { withTranslation } from 'react-i18next';
import LogoTitle from '../images/logo_title.png';
import LogoTitleSmall from '../images/logo_title_small.png';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
var _ = require('lodash');

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    onLocaleToggle = locale => {
        i18n.changeLanguage(locale);
        this.forceUpdate();
    };

    render() {
        const localeToggle = i18n.language === 'en' ? 'fr' : 'en';
        const t = this.props.t; 
        const user = this.props.user;   
        const cart = this.props.cart;
        return (
            <header id="header" className="nav-bar animated fadeInDown delay-2s">
                <a className="nav-title-container" href="#">
                    <img alt="logo-title" className="nav-title" src={LogoTitle} />
                </a>

                <nav>
                    { _.get(cart, 'total_items') > 0 &&
                        <Tippy className="cart-container" boundary="window" showOnCreate placement="bottom-start" trigger="click" interactive arrow={false} content={
                            <div className="cart">
                                <p><u>{t('ShoppingCart')}:</u></p>
                                <ul className="cart-items">
                                    { _.map(cart.line_items, line_item => (
                                        <li key={line_item.id}>
                                            <div onClick={() => this.props.removeItem(line_item.id)} className="cart-item-remove">X</div>
                                            {line_item.name} x{line_item.quantity} @ {line_item.line_total.formatted_with_symbol}
                                        </li>
                                    ))}
                                </ul>
                                <p className="cart-total">Total: {cart.subtotal.formatted_with_symbol}</p>
                                <a className="btn-purple" href={cart.hosted_checkout_url}>Checkout</a>
                                <br></br>
                                <div className="btn-purple" onClick={this.props.emptyCart}>Empty Cart</div>
                            </div>
                        }>
                            <a><i className="fa fa-shopping-cart"/>{cart.total_items}</a>
                        </Tippy>
                    }

                    <a href="mailto:hey@montreact.com">{t('letsTalk')}</a>
                    <a onClick={() => this.onLocaleToggle(localeToggle)} onKeyDown={() => this.onLocaleToggle(localeToggle)}>{localeToggle}</a>
                    { _.isEmpty(user) ? 
                       <a onClick={() => this.props.login()}>Login</a> 
                        :
                        <Tippy className="user-dropdown-container" boundary="window" placement="bottom-start" trigger="click" interactive arrow={false} content={
                            <div className="user-dropdown">
                                <a href="#store">Store</a>
                                <a href="https://fb.com/book/Montreact/">Appointment</a>
                                <a href="#team">Our Team</a> 
                                <a onClick={this.props.logout}>Logout</a>
                            </div>
                        }>
                            <img src={_.get(user, 'picture.data.url')} alt="" ></img>
                        </Tippy>
                    }
                </nav>
            </header>
        );
    }
}

export default withTranslation()(Nav);

