import React from 'react';
import i18n from "i18next";
import { withTranslation } from 'react-i18next';

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
    };

    render() {
        const localeToggle = i18n.language === 'en' ? 'fr' : 'en';
        const t = this.props.t;    
        
        return (
            <header id="header" className="nav-bar animated fadeInDown delay-1s">
                <a className="hide-on-small" href="/">Montreact</a>
                <nav>
                    <a href="#">{t('NavHome')}</a>
                    {/* <a href="#generic">{t('NavGeneric')}</a>
                    <a href="#elements">{t('NavElements')}</a>  */}
                    { this.props.auth0.isAuthenticated ? 
                        <>
                        <a href="#generic">Account</a>
                        <a onClick={this.logout}>Logout</a>
                        </>
                    : 
                        <a onClick={this.props.auth0.loginWithRedirect}>Login</a> 
                    }
                    <a onClick={() => this.onLocaleToggle(localeToggle)}
                    onKeyDown={() => this.onLocaleToggle(localeToggle)}>
                    {localeToggle}
                    </a>
                </nav>
            </header>
        );
    }
}

export default withTranslation()(Nav);

