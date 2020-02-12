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
import home1 from '../images/home1.jpg';
import home2 from '../images/home2.jpg';
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
			<div id="page-wrapper">

				{/* <!-- Header --> */}
					<header id="header" class="alt">
						<h1><a href="index.html">Solid State</a></h1>
						<nav>
							<a href="/old">Old Site</a>
              <a 
                onClick={() => this.onLocaleToggle(localeToggle)}
                onKeyDown={() => this.onLocaleToggle(localeToggle)}>
              {localeToggle}</a>
						</nav>
					</header>

				{/* <!-- Banner --> */}
					<section id="banner">
						<div class="inner banner-container">
              <span className="logo-container animated jello delay-5s ">
                <img alt="logo-half" className="logo-half fade-in-up" src={LogoLeft} />
                <img alt="logo-half" className="logo-half fade-in-up" src={LogoRight} />
              </span>

              <span className="fade-in">
                <img alt="logo-title" className="logo-title" src={LogoTitle} />
                <h1 className="catch-phrase">{t('catchPhrase')}</h1>
              </span>
            </div>
					</section>

				{/* <!-- Wrapper --> */}
					<section id="wrapper">

						{/* <!-- One --> */}
							<section id="one" class="wrapper spotlight style1">
								<div class="inner">
									<a href="#" class="image"><img src={home1} alt="" /></a>
									<div class="content">
										<h2 class="major">{t('WhoAreWeTitle')}</h2>
										<p>{t('WhoAreWeText')}</p>
										<a href="#" class="special">Learn more</a>
									</div>
								</div>
							</section>

						{/* <!-- Two --> */}
							<section id="two" class="wrapper alt spotlight style2 flat-bottom">
								<div class="inner">
									<a href="#" class="image"><img src={home2} alt="" /></a>
									<div class="content">
										<h2 class="major">{t('WhatWeDoTitle')}</h2>
										<p>{t('WhatWeDoText')}</p>
									</div>
								</div>
							</section>

						{/* <!-- Three --> */}
							{/* <section id="three" class="wrapper spotlight style3">
								<div class="inner">
									<a href="#" class="image"><img src={home2} alt="" /></a>
									<div class="content">
										<h2 class="major">{t('WhatWeDoTitle')}</h2>
										<p>{t('WhatWeDoText')}</p>
									</div>
								</div>
							</section> */}
					</section>

				{/* <!-- Footer --> */}
					<section id="footer">

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

						<div class="inner">
							<h2 class="major">Get in touch</h2>
							<p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
							<form method="post" action="#">
								<div class="fields">
									<div class="field">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div class="field">
										<label for="email">Email</label>
										<input type="email" name="email" id="email" />
									</div>
									<div class="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="4"></textarea>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
							<ul class="contact">
								<li class="icon solid fa-home">
									Untitled Inc<br />
									1234 Somewhere Road Suite #2894<br />
									Nashville, TN 00000-0000
								</li>
								<li class="icon solid fa-phone">(514) 898-4828</li>
								<li class="icon solid fa-envelope"><a href="mailto:alexviapiano@montreact.com">alexviapiano@montreact.com</a></li>
                <li class="icon brands fa-linkedin"><a href="https://ca.linkedin.com/company/montreact">facebook.com/untitled-tld</a></li>
							</ul>
							<ul class="copyright">
								<li>&copy; Montreact</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</section>

			</div>
    );
  }
}

export default withTranslation()(HomePage);

