import React from 'react';
import i18n from "i18next";
import { withTranslation } from 'react-i18next';
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
                <a href="#">Montreact</a>
                <nav>
                    <a onClick={() => this.onLocaleToggle(localeToggle)} onKeyDown={() => this.onLocaleToggle(localeToggle)}>{localeToggle}</a>
                    { this.props.auth0.isAuthenticated ? 
                        <Tippy boundary="window" placement="bottom-start" trigger="click" hideOnClick={true} interactive content={
                            <div className="user-dropdown">
                                <a href="#account">Account</a> 
                                <a onClick={this.logout}>Logout</a>
                            </div>
                        }>
                            <a><img src={this.props.auth0.user.picture} alt="" ></img></a>
                        </Tippy>
                    : 
                        <a onClick={this.props.auth0.loginWithRedirect}>Login</a> 
                    }
                </nav>
            </header>
        );
    }
}

export default withTranslation()(Nav);

