import React from 'react';
import i18n from "i18next";
import { withTranslation } from 'react-i18next';
import LogoTitle from '../images/logo_title.png';
import LogoTitleSmall from '../images/logo_title_small.png';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.logout = this.logout.bind(this);
    }
  
    logout() {
      this.props.auth0.logout();
      this.forceUpdate();
    }

    onLocaleToggle = locale => {
        i18n.changeLanguage(locale);
        this.forceUpdate();
    };

    render() {
        const localeToggle = i18n.language === 'en' ? 'fr' : 'en';
        const t = this.props.t;    
        return (
            <header id="header" className="nav-bar animated fadeInDown delay-1s">
                <a className="nav-title-container" href="#">
                    <img alt="logo-title" className="nav-title" src={LogoTitle} />
                    <img alt="logo-title" style={{display: 'none'}} className="nav-title-small" src={LogoTitleSmall} />
                </a>
                <nav>
                    <a href="mailto:hey@montreact.com">{t('letsTalk')}</a>
                    <a onClick={() => this.onLocaleToggle(localeToggle)} onKeyDown={() => this.onLocaleToggle(localeToggle)}>{localeToggle}</a>

                    { this.props.auth0.isAuthenticated ? 
                        <Tippy className="user-dropdown-container" boundary="window" placement="bottom-start" trigger="click" interactive arrow={false} content={
                            <div className="user-dropdown">
                                <a href="#account">Account</a> 
                                <a onClick={this.logout}>Logout</a>
                            </div>
                        }>
                            <img src={this.props.auth0.user.picture} alt="" ></img>
                        </Tippy>
                    : this.props.auth0 ?
                        <a onClick={this.props.auth0.loginWithRedirect}>Login</a> 
                    : null }
                </nav>
            </header>
        );
    }
}

export default withTranslation()(Nav);

