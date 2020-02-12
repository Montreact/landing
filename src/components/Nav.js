import React from 'react';
import i18n from "i18next";
import { withTranslation } from 'react-i18next';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onLocaleToggle = locale => {
        i18n.changeLanguage(locale);
    };

    render() {
        const localeToggle = i18n.language === 'en' ? 'fr' : 'en';
        const t = this.props.t;    
        
        return (
            <header id="header" className="nav-bar">
                <a className="hide-on-small" href="/">Montreact</a>
                <nav>
                    <a href="/">{t('NavHome')}</a>
                    <a href="/generic">{t('NavGeneric')}</a>
                    <a href="/elements">{t('NavElements')}</a>
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

