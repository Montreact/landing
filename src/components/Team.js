import React from 'react';
import { withTranslation } from 'react-i18next';
import alex from '../images/alex.jpeg';
import mick from '../images/mick.jpeg';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const t = this.props.t;
    const user = this.props.user;
    return (
      <div id='page-wrapper'>
        {/* <!-- Wrapper --> */}
        <section id='wrapper'>
          <div className='wrapper team-wrapper'>
            <div className='inner'>
              <h3 className='major'>
                {t('Welcome')} {_.get(user, 'name')}
              </h3>
              <p>{t('OurTeam')}</p>
              <h3 className='major'>{t('MeetTheFounders')}</h3>
              <section className='features'>
                <article>
                  <a href='/alexviapiano' className='image'>
                    <img src={alex} alt='' />
                  </a>
                  <h3 className='major'>Alex Viapiano</h3>
                  <p>React Developer</p>
                </article>
                <article>
                  <a href='#' className='image'>
                    <img src={mick} alt='' />
                  </a>
                  <h3 className='major'>Mickael Gange</h3>
                  <p>React Developer</p>
                </article>
              </section>
            </div>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <section id='footer'>
          <div className='inner'>
            <h2 className='major'>
              <AnimatedCoffee />
              <br></br>
              <div className='coffee-text'>{t('Coffee')}</div>
            </h2>

            <form method='post' action='https://formspree.io/montreact@gmail.com'>
              <div className='fields'>
                <div className='field'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' id='name' />
                </div>
                <div className='field'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' name='email' id='email' />
                </div>
                <div className='field'>
                  <label htmlFor='message'>Message</label>
                  <textarea name='message' id='message' rows='4'></textarea>
                </div>
              </div>
              <ul className='actions'>
                <li>
                  <input type='submit' value='Send Message' />
                </li>
              </ul>
            </form>

            <ul className='contact'>
              <li className='btn-purple'>
                <a href='mailto:montreact@gmail.com'>
                  <i className='fa fa-envelope' />
                  montreact@gmail.com
                </a>
              </li>
              <li className='btn-purple'>
                <a href='https://ca.linkedin.com/company/montreact'>
                  <i className='fa fa-linkedin' />
                  LinkedIn
                </a>
              </li>
              <li className='btn-purple'>
                <a href='https://www.facebook.com/Montreact'>
                  <i className='fa fa-facebook' />
                  Facebook
                </a>
              </li>
            </ul>

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

class AnimatedCoffee extends React.Component {
  render() {
    return (
      <div
        className='animated-coffee'
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

export default withTranslation()(Team);
