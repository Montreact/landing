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
        return (
            <header id="header" className="nav-bar animated fadeInDown delay-2s">
                <a className="nav-title-container" href="#">
                    <img alt="logo-title" className="nav-title" src={LogoTitle} />
                    <img alt="logo-title" style={{display: 'none'}} className="nav-title-small" src={LogoTitleSmall} />
                </a>
                <nav>
                    <a href="mailto:hey@montreact.com">{t('letsTalk')}</a>
                    <a onClick={() => this.onLocaleToggle(localeToggle)} onKeyDown={() => this.onLocaleToggle(localeToggle)}>{localeToggle}</a>
                    { _.isEmpty(user) ? 
                       <a onClick={() => this.props.login()}>Login</a> 
                        :
                        <Tippy className="user-dropdown-container" boundary="window" placement="bottom-start" trigger="click" interactive arrow={false} content={
                            <div className="user-dropdown">
                                <a href="#team">Our Team</a> 
                                <a href="https://fb.com/book/Montreact/">Appointment</a>
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

