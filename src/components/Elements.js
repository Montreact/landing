import React from 'react';
import i18n from "i18next";
import { withTranslation } from 'react-i18next';

import home1 from '../images/home1.jpg';
import home2 from '../images/home2.jpg';

class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const localeToggle = i18n.language === 'en' ? 'fr' : 'en';
    const t = this.props.t;    
    
    return (
			<div id="page-wrapper">

        {/* <!-- Wrapper --> */}
					<section id="wrapper">
						<header>
							<div class="inner">
								<h2>Elements</h2>
								<p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
							</div>
						</header>

						{/* <!-- Content --> */}
							<div class="wrapper">
								<div class="inner">

									<section>
										<h3 class="major">Text</h3>
										<p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
										This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
										This is <u>underlined</u> and this is code: <code>for (;;)</code>. Finally, <a href="#">this is a link</a>.</p>
										<h4>Blockquote</h4>
										<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
										<h4>Preformatted</h4>
										<pre><code>i = 0;</code></pre>
									</section>

									<section>
										<h3 class="major">Lists</h3>
										<div class="row">
											<div class="col-6 col-12-medium">
												<h4>Unordered</h4>
												<ul>
													<li>Dolor pulvinar etiam.</li>
													<li>Sagittis adipiscing.</li>
													<li>Felis enim feugiat.</li>
												</ul>
												<h4>Alternate</h4>
												<ul class="alt">
													<li>Dolor pulvinar etiam.</li>
													<li>Sagittis adipiscing.</li>
													<li>Felis enim feugiat.</li>
												</ul>
											</div>
											<div class="col-6 col-12-medium">
												<h4>Ordered</h4>
												<ol>
													<li>Dolor pulvinar etiam.</li>
													<li>Etiam vel felis viverra.</li>
													<li>Felis enim feugiat.</li>
													<li>Dolor pulvinar etiam.</li>
													<li>Etiam vel felis lorem.</li>
													<li>Felis enim et feugiat.</li>
												</ol>
												<h4>Icons</h4>
												<ul class="icons">
													<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
													<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
													<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
													<li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
												</ul>
											</div>
										</div>
										<h4>Actions</h4>
										<div class="row">
											<div class="col-6 col-12-medium">
												<ul class="actions">
													<li><a href="#" class="button primary">Default</a></li>
													<li><a href="#" class="button">Default</a></li>
												</ul>
												<ul class="actions small">
													<li><a href="#" class="button primary small">Small</a></li>
													<li><a href="#" class="button small">Small</a></li>
												</ul>
												<ul class="actions stacked">
													<li><a href="#" class="button primary">Default</a></li>
													<li><a href="#" class="button">Default</a></li>
												</ul>
												<ul class="actions stacked small">
													<li><a href="#" class="button primary small">Small</a></li>
													<li><a href="#" class="button small">Small</a></li>
												</ul>
											</div>
											<div class="col-6 col-12-medium">
												<ul class="actions stacked">
													<li><a href="#" class="button primary fit">Default</a></li>
													<li><a href="#" class="button fit">Default</a></li>
												</ul>
												<ul class="actions stacked small">
													<li><a href="#" class="button primary small fit">Small</a></li>
													<li><a href="#" class="button small fit">Small</a></li>
												</ul>
											</div>
										</div>
										<h4>Pagination</h4>
										<ul class="pagination">
											<li><span class="button small disabled">Prev</span></li>
											<li><a href="#" class="page active">1</a></li>
											<li><a href="#" class="page">2</a></li>
											<li><a href="#" class="page">3</a></li>
											<li><span>&hellip;</span></li>
											<li><a href="#" class="page">8</a></li>
											<li><a href="#" class="page">9</a></li>
											<li><a href="#" class="page">10</a></li>
											<li><a href="#" class="button small">Next</a></li>
										</ul>
									</section>

									<section>
										<h3 class="major">Table</h3>
										<h4>Default</h4>
										<div class="table-wrapper">
											<table>
												<thead>
													<tr>
														<th>Name</th>
														<th>Description</th>
														<th>Price</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Item One</td>
														<td>Ante turpis integer aliquet porttitor.</td>
														<td>29.99</td>
													</tr>
													<tr>
														<td>Item Two</td>
														<td>Vis ac commodo adipiscing arcu aliquet.</td>
														<td>19.99</td>
													</tr>
													<tr>
														<td>Item Three</td>
														<td> Morbi faucibus arcu accumsan lorem.</td>
														<td>29.99</td>
													</tr>
													<tr>
														<td>Item Four</td>
														<td>Vitae integer tempus condimentum.</td>
														<td>19.99</td>
													</tr>
													<tr>
														<td>Item Five</td>
														<td>Ante turpis integer aliquet porttitor.</td>
														<td>29.99</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<td colspan="2"></td>
														<td>100.00</td>
													</tr>
												</tfoot>
											</table>
										</div>

										<h4>Alternate</h4>
										<div class="table-wrapper">
											<table class="alt">
												<thead>
													<tr>
														<th>Name</th>
														<th>Description</th>
														<th>Price</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Item One</td>
														<td>Ante turpis integer aliquet porttitor.</td>
														<td>29.99</td>
													</tr>
													<tr>
														<td>Item Two</td>
														<td>Vis ac commodo adipiscing arcu aliquet.</td>
														<td>19.99</td>
													</tr>
													<tr>
														<td>Item Three</td>
														<td> Morbi faucibus arcu accumsan lorem.</td>
														<td>29.99</td>
													</tr>
													<tr>
														<td>Item Four</td>
														<td>Vitae integer tempus condimentum.</td>
														<td>19.99</td>
													</tr>
													<tr>
														<td>Item Five</td>
														<td>Ante turpis integer aliquet porttitor.</td>
														<td>29.99</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<td colspan="2"></td>
														<td>100.00</td>
													</tr>
												</tfoot>
											</table>
										</div>
									</section>

									<section>
										<h3 class="major">Buttons</h3>
										<ul class="actions">
											<li><a href="#" class="button primary">Primary</a></li>
											<li><a href="#" class="button">Default</a></li>
										</ul>
										<ul class="actions">
											<li><a href="#" class="button large">Large</a></li>
											<li><a href="#" class="button small">Small</a></li>
										</ul>
										<ul class="actions fit">
											<li><a href="#" class="button fit">Fit</a></li>
											<li><a href="#" class="button primary fit">Fit</a></li>
											<li><a href="#" class="button fit">Fit</a></li>
										</ul>
										<ul class="actions fit small">
											<li><a href="#" class="button primary fit small">Fit + Small</a></li>
											<li><a href="#" class="button fit small">Fit + Small</a></li>
											<li><a href="#" class="button primary fit small">Fit + Small</a></li>
										</ul>
										<ul class="actions">
											<li><a href="#" class="button primary icon solid fa-download">Icon</a></li>
											<li><a href="#" class="button icon solid fa-download">Icon</a></li>
										</ul>
										<ul class="actions">
											<li><span class="button primary disabled">Disabled</span></li>
											<li><span class="button disabled">Disabled</span></li>
										</ul>
									</section>

									<section>
										<h3 class="major">Form</h3>
										<form method="post" action="#">
											<div class="row gtr-uniform">
												<div class="col-6 col-12-xsmall">
													<label for="demo-name">Name</label>
													<input type="text" name="demo-name" id="demo-name" value="" />
												</div>
												<div class="col-6 col-12-xsmall">
													<label for="demo-email">Email</label>
													<input type="email" name="demo-email" id="demo-email" value="" />
												</div>
												<div class="col-12">
													<label for="demo-category">Category</label>
													<select name="demo-category" id="demo-category">
														<option value="">-</option>
														<option value="1">Manufacturing</option>
														<option value="1">Shipping</option>
														<option value="1">Administration</option>
														<option value="1">Human Resources</option>
													</select>
												</div>
												<div class="col-4 col-12-small">
													<input type="radio" id="demo-priority-low" name="demo-priority" checked></input>
													<label for="demo-priority-low">Low Priority</label>
												</div>
												<div class="col-4 col-12-small">
													<input type="radio" id="demo-priority-normal" name="demo-priority"></input>
													<label for="demo-priority-normal">Normal Priority</label>
												</div>
												<div class="col-4 col-12-small">
													<input type="radio" id="demo-priority-high" name="demo-priority"></input>
													<label for="demo-priority-high">High Priority</label>
												</div>
												<div class="col-6 col-12-small">
													<input type="checkbox" id="demo-copy" name="demo-copy"></input>
													<label for="demo-copy">Email me a copy</label>
												</div>
												<div class="col-6 col-12-small">
													<input type="checkbox" id="demo-human" name="demo-human" checked></input>
													<label for="demo-human">Not a robot</label>
												</div>
												<div class="col-12">
													<label for="demo-message">Message</label>
													<textarea name="demo-message" id="demo-message" rows="6"></textarea>
												</div>
												<div class="col-12">
													<ul class="actions">
														<li><input type="submit" value="Send Message" class="primary" /></li>
														<li><input type="reset" value="Reset" /></li>
													</ul>
												</div>
											</div>
										</form>
									</section>

									<section>
										<h3 class="major">Image</h3>
										<h4>Fit</h4>
										<div class="box alt">
											<div class="row gtr-uniform">
												<div class="col-12"><span class="image fit"><img src="images/pic08.jpg" alt="" /></span></div>
												<div class="col-4"><span class="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
												<div class="col-4"><span class="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
												<div class="col-4"><span class="image fit"><img src="images/pic07.jpg" alt="" /></span></div>
												<div class="col-4"><span class="image fit"><img src="images/pic07.jpg" alt="" /></span></div>
												<div class="col-4"><span class="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
												<div class="col-4"><span class="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
												<div class="col-4"><span class="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
												<div class="col-4"><span class="image fit"><img src="images/pic07.jpg" alt="" /></span></div>
												<div class="col-4"><span class="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
											</div>
										</div>
										<h4>Left &amp; Right</h4>
										<p><span class="image left"><img src="images/pic01.jpg" alt="" /></span>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>
										<p><span class="image right"><img src="images/pic02.jpg" alt="" /></span>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius. Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat. Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui.</p>
									</section>

								</div>
							</div>

					</section>


				{/* <!-- Footer --> */}
					<section id="footer">

            <div className="inner">
              <h2 className="major">
                <AnimatedCoffee />
                <br></br>
                <div className="coffee-text">{t('Coffee')}</div>
              </h2>

              <form method="post" action="https://formspree.io/montreact@gmail.com">
                <div className="fields">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4"></textarea>
                  </div>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send Message" /></li>
                </ul>
              </form>
              <ul className="contact">
                <li className="btn-purple"><a href="mailto:montreact@gmail.com">info@montreact.com</a></li>
                <li className="btn-purple"><a href="https://ca.linkedin.com/company/montreact">linkedin.com/montreact</a></li> 
                <li className="btn-purple"><a href="tel:514-898-4828">(514) 898-4828</a></li>             
              </ul>
              <ul className="copyright">
                <li>&copy; Montreact</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
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

export default withTranslation()(Elements);

