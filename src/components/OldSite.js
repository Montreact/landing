import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import LogoLeft from '../images/logo-left.png';
import LogoRight from '../images/logo-right.png';
import LogoTitle from '../images/logo_title.png';
import DownArrow from '../images/down-arrow.svg';
import ToolBoxLogoReact from '../images/toolbox/react_solo.png';
import ToolBoxLogoReactNative from '../images/toolbox/react-native.png';
import ToolBoxLogoRedux from '../images/toolbox/redux_solo.png';
import ToolBoxLogoExpoIO from '../images/toolbox/expo_solo.png';
import ToolBoxLogoSASS from '../images/toolbox/sass.png';
import pic01 from '../images/apps/pic01.jpg';
import pic02 from '../images/apps/pic02.jpg';
import pic03 from '../images/apps/pic03.jpg';
import pic04 from '../images/apps/pic04.jpg';
import pic05 from '../images/apps/pic05.jpg';
import pic06 from '../images/apps/pic06.jpg';
import pic07 from '../images/apps/pic07.png';
import pic08 from '../images/apps/pic08.png';
import pic09 from '../images/apps/pic09.jpg';
import pic15 from '../images/apps/pic15.jpg';
import pic16 from '../images/apps/pic16.jpg';
import pic17 from '../images/apps/pic17.jpg';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

import i18n from "i18next";

import { withTranslation } from 'react-i18next';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.about = React.createRef()  
  }

  onLocaleToggle = locale => {
    i18n.changeLanguage(locale);
  };

  handleScrollDown = () => {
    window.scrollTo({
      left: 0,
      top: this.about.current.offsetTop,
      behavior: 'smooth',
    });
  };

  render() {
    const localeToggle = i18n.language === 'en' ? 'fr' : 'en';
    const t = this.props.t;    
    return (
      <React.Fragment>
        <div className="landing section section-full">
          <button
            type="submit"
            onClick={() => this.onLocaleToggle(localeToggle)}
            onKeyDown={() => this.onLocaleToggle(localeToggle)}
            className="lang-btn"
          >
            {localeToggle}
          </button>

          <span className="logo-container animated jello delay-5s ">
            <img alt="logo-half" className="logo-half fade-in-up" src={LogoLeft} />
            <img alt="logo-half" className="logo-half fade-in-up" src={LogoRight} />
          </span>

          <span className="fade-in">
            <img alt="logo-title" className="logo-title" src={LogoTitle} />

            <h1 className="catch-phrase">{t('catchPhrase')}</h1>

            <a className="contact-us" href="mailto:montreact@gmail.com" role="button">
              <button type="submit">{t('letsTalk')}</button>
            </a>
          </span>

          <button type="submit" className="down-arrow" onClick={() => this.handleScrollDown()} onKeyDown={() => this.handleScrollDown()}>
            <img alt="down-arrow" width="30" src={DownArrow} />
          </button>
        </div>

        <div ref={this.about} className="description section section-full">
          <div className="description-right">
            <h1>{t('WhoAreWeTitle')}</h1>
            <p>{t('WhoAreWeText')}</p>
          </div>

          <div className="description-left">
            <h1>{t('WhatWeDoTitle')}</h1>
            <p>{t('WhatWeDoText')}</p>
          </div>
        </div>

        <div className="toolbox section">
          <h1>{t('Expertise')}</h1>
          <ul>
            <li className="tool">
              <a target="_blank" href="https://reactjs.org/">
                <img alt="react-logo" width="160" src={ToolBoxLogoReact} />
              </a>
              <p>React</p>
            </li>
            <li className="tool">
              <a target="_blank" href="https://facebook.github.io/react-native/">
                <img alt="react-native-logo" width="160" src={ToolBoxLogoReactNative} />
              </a>
              <p>React Native</p>
            </li>
            <li className="tool">
              <a target="_blank" href="https://redux.js.org/">
                <img alt="redux-logo" width="160" src={ToolBoxLogoRedux} />
              </a>
              <p>Redux</p>
            </li>
            <li className="tool">
              <a target="_blank" href="https://expo.io/">
                <img alt="expo-io-logo" width="160" src={ToolBoxLogoExpoIO} />
              </a>
              <p>Expo</p>
            </li>
            <li className="tool">
              <a target="_blank" href="https://sass-lang.com/">
                <img alt="sass-logo" width="160" src={ToolBoxLogoSASS} />
              </a>
              <p>Syntactically Awesome<br /> Style Sheets</p>
            </li>
          </ul>
        </div>

        <div className="portfolio section">
          <h1>
            {t('Portfolio')}
          </h1>

          <div className="apps">
            <div className="app-section">
              <Tippy content="GOrendezvous (iOS) - Alex Viapiano" animation="fade" arrow >
                <a href="https://itunes.apple.com/ca/app/gorendezvous/id1353526648?mt=8" target="_blank" className="app">
                  <img className="mobile-app" src={pic07} alt="" />
                </a>
              </Tippy>
              <Tippy content="GOrendezvous (Android) - Alex Viapiano" animation="fade" arrow >
                <a href="https://play.google.com/store/apps/details?id=com.gorendezvous.mobile" target="_blank" className="app">
                  <img className="mobile-app" src={pic08} alt="" />
                </a>
              </Tippy>
              <Tippy content="Mix" animation="fade" arrow >
                <a href="https://developer.cerence.com/#/login" target="_blank" className="app">
                  <img src={pic16} alt="" />
                </a>
              </Tippy>
              <Tippy content="Nite Bite - Alex Viapiano" animation="fade" arrow >
                <a href="https://nitebite.herokuapp.com/" target="_blank" className="app">
                  <img src={pic09} alt="" />
                </a>
              </Tippy>
              <Tippy content="Ambition Funds - Alex Viapiano" animation="fade" arrow >
                <a href="http://www.ambitionfunds.org/" target="_blank" className="app" >
                  <img src={pic15} alt="" />
                </a>
              </Tippy>
              <Tippy content="Groupe Atlanta - Alex Viapiano" animation="fade" arrow >
                <a href="https://www.groupeatlanta.ca" target="_blank" className="app" >
                  <img src={pic01} alt="" />
                </a>
              </Tippy>
              <Tippy content="Biscotti Diana - Alex Viapiano" animation="fade" arrow >
                <a href="https://biscottidiana.ca/" target="_blank" className="app" >
                  <img src={pic06} alt="" />
                </a>
              </Tippy>
              <Tippy content="Emtex - Alex Viapiano" animation="fade" arrow >
                <a href="http://www.emtex.ca/" target="_blank" className="app">
                  <img src={pic04} alt="" />
                </a>
              </Tippy>
              <Tippy content="A Plus - Alex Viapiano" animation="fade" arrow >
                <a href="https://alexviapiano.github.io/Aplus/" target="_blank" className="app">
                  <img src={pic17} alt="" />
                </a>
              </Tippy>
              <Tippy content="LUVI - Alex Viapiano" animation="fade" arrow >
                <a href="www.luvi.ca" target="_blank" className="app">
                  <img src={pic05} alt="" />
                </a>
              </Tippy>
              <Tippy content="The Green Room - Alex Viapiano" animation="fade" arrow >
                <a href="www.greenroomchannel.com" target="_blank" className="app">
                  <img src={pic03} alt="" />
                </a>
              </Tippy>
              <Tippy content="Condos Cite Avenir Laval - Alex Viapiano" animation="fade" arrow >
                <a href="https://alexviapiano.github.io/CondosCiteAvenirLaval/" target="_blank" className="app">
                  <img src={pic02} alt="" />
                </a>
              </Tippy>
            </div>
          </div>
        </div>

        <div className="coffee">
          <AnimatedCoffee />
          {t('Coffee')}
          <a className="contact-us" href="mailto:montreact@gmail.com" role="button">
            <button type="submit">{t('contactUs')}</button>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

class AnimatedCoffee extends React.Component {
  render() {
    return (
      <div
        className="animated-coffee"
        dangerouslySetInnerHTML={{
          __html: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block;" width="91px" height="91px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <defs>
            <linearGradient id="ldio-yswp1dynvd-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="10%" stop-color="black" stop-opacity="0"></stop>
              <stop offset="100%" stop-color="white" stop-opacity="1"></stop>
            </linearGradient>
            <mask id="ldio-yswp1dynvd-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
              <rect x="22" y="8" width="56" height="54" fill="url(#ldio-yswp1dynvd-gradient)"></rect>
            </mask>
            <path id="ldio-yswp1dynvd-steam" d="M0-4c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0 c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9h0c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9" stroke-width="6" stroke-linecap="round" fill="#f00" stroke="#ffffff"></path>
          </defs>
          <g mask="url(#ldio-yswp1dynvd-mask)">
            <use x="29" y="-2.52066" xlink:href="#ldio-yswp1dynvd-steam">
              <animate attributeName="y" values="4;-14" keyTimes="0;1" dur="2.7027027027027026s" repeatCount="indefinite" begin="-1.3513513513513513s"></animate>
            </use>
            <use x="47" y="-2.02066" xlink:href="#ldio-yswp1dynvd-steam">
              <animate attributeName="y" values="0;-18" keyTimes="0;1" dur="2.7027027027027026s" repeatCount="indefinite" begin="-0.6756756756756757s"></animate>
            </use>
            <use x="64" y="-7.52066" xlink:href="#ldio-yswp1dynvd-steam">
              <animate attributeName="y" values="-4;-22" keyTimes="0;1" dur="2.7027027027027026s" repeatCount="indefinite" begin="-0.900900900900901s"></animate>
            </use>
          </g>
          <path d="M81.2,52.5l-5.2,0V49c0-1.6-1.3-3-3-3H20c-1.6,0-3,1.3-3,3v11.6C17,71.3,25.7,80,36.5,80h20.1 c7.1,0,13.3-3.8,16.7-9.5h8.3c5.2,0,9.3-4.4,9-9.6C90.2,56.1,86,52.5,81.2,52.5z M81.5,67.5h-6.8c0.8-2.2,1.3-4.5,1.3-7v-5h5.5 c3.3,0,6,2.7,6,6S84.8,67.5,81.5,67.5z" fill="#7158dc"></path>
          <path d="M78.8,88H19.2c-1.1,0-2-0.9-2-2s0.9-2,2-2h59.5c1.1,0,2,0.9,2,2S79.9,88,78.8,88z" fill="#FFF"></path>
        </svg>
      `,
        }}
      />
    );
  }
}

export default withTranslation()(HomePage);

