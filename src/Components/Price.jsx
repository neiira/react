import React from 'react';
import Buttons from '../Components/Buttons';

function Price() {
  return (
    <div>
      <section className="plan" id="pricing">
        <h1 className="plan-heading">Choose Your Plan</h1>
        <p className="plan-paragaraph">
          Let's choose the package that is best for you and explore it happily
          <br />
          and cheerfully.
        </p>
        <div className="wrapper">
          <div className="packages-row">
            <div className="packages-col">
              <div class="packages-col__imgbox">
                <img src={process.env.PUBLIC_URL + 'images/Free.svg'} alt="" className="package-img" />
              </div>
              <div className="packages-col__head">
                <p>Free Plan</p>
              </div>
              <div className="plan-list">
                <ul className="plan_items">
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Unlimited Bandwitch
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Encrypted Connection
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    No Traffic Logs
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Works on All Devices
                  </li>
                </ul>
              </div>
              <div className="pricing">
                <p className="plan-title"> Free</p>
                <Buttons text="Select" />
              </div>
            </div>
            <div className="packages-col">
              <div className="packages-col__imgbox">
                <img src={process.env.PUBLIC_URL + 'images/Premium.svg'} alt="" className="package-img" />
              </div>
              <div className="packages-col__head">
                <p>Standard Plan</p>
              </div>
              <div className="plan-list">
                <ul className="plan_items">
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Unlimited Bandwitch
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Encrypted Connection
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Yes Traffic Logs
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Works on All Devices
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Connect Anyware
                  </li>
                </ul>
              </div>
              <div className="pricing">
                <p className="plan-title">
                  $9<span className="plan-title__span">/mo</span>
                </p>
                <Buttons text="Select" />
              </div>
            </div>
            <div className="packages-col">
              <div className="packages-col__imgbox">
                <img src={process.env.PUBLIC_URL + 'images/Standard.svg'} alt="" className="package-img" />
              </div>
              <div className="packages-col__head">
                <p>Premium Plan</p>
              </div>
              <div className="plan-list">
                <ul className="plan_items">
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Unlimited Bandwitch
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Encrypted Connection
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    No Traffic Logs
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Works on All Devices
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Connect Anyware
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL + 'images/Group 1223.svg'} alt="" className="groupimg-1223" />
                    Get New Features
                  </li>
                </ul>
              </div>
              <div className="pricing">
                <p className="plan-title">
                  $12<span className="plan-title__span">/mo</span>
                </p>
                <Buttons text="Select" />
              </div>
            </div>
          </div>

          <div className="global-description">
            <h1 className="global-description__h1">
              Huge Global Network
              <br /> of Fast VPN
            </h1>
            <p className="global-description__p">
              See LaslesVPN everywhere to make it easier for you when you move
              <br />
              locations.
            </p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + 'images/Huge Global.svg'} alt="" className="huge-global-img" />
          </div>
          <div className="enterainment-app-icon">
            <div className="netflix">
              <img src={process.env.PUBLIC_URL + 'images/Mask Group.svg'} alt="" />
            </div>
            <div className="reddit">
              <img src={process.env.PUBLIC_URL + 'images/Mask Group (1).svg'} alt="" />
            </div>
            <div className="amazon">
              <img src={process.env.PUBLIC_URL + 'images/amazon.png'} alt="" />
            </div>
            <div className="discord">
              <img src={process.env.PUBLIC_URL + 'images/Mask Group (2).svg'} alt="" />
            </div>
            <div className="spotify">
              <img src={process.env.PUBLIC_URL + 'images/Mask Group (3).svg'} alt="" />
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="testimonial-head">
            <h1 className="testimonial-head__h1">
              Trusted by Thousands of
              <br />
              Happy Customer
            </h1>
            <p className="testimonial-head__p">
              These are the stories of our customers who have joined us with great
              <br />
              pleasure when using this crazy feature.
            </p>
          </div>

          <div className="wrapper">
            <div className="testimonials-carousel-container">
              <div className="testimonials-carousel  testimonials-carousel_first testimonials-carousel_active">
                <div className="testimonials-person">
                  <img className="person-img" src={process.env.PUBLIC_URL + 'images/person1.svg'} alt="person.jpg" />
                  <div className="person-info">
                    <p className="person-info__name">Viez Robort</p>
                    <p className="person-info__address">Warsaw Poladn</p>
                  </div>
                  <p className="testimonials-carousel__person-rating">
                    {' '}
                    4.5{' '}
                    <span>
                      <img
                        className="testimonials-carousel__star"
                        src={process.env.PUBLIC_URL + 'images/star.svg'}
                        alt=""
                      />
                    </span>
                  </p>
                </div>
                <p className="testimonials-carousel__description">
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far
                  there have been no problems. LaslesVPN always the best”.
                </p>
              </div>
              <div className="testimonials-carousel  testimonials-carousel_second testimonials-carousel_active">
                <div className="testimonials-person">
                  <img className="person-img" src={process.env.PUBLIC_URL + 'images/yessica.svg'} alt="person.jpg" />
                  <div className="person-info">
                    <p className="person-info__name">Yessica Christy</p>
                    <p className="person-info__address">shanxi,China</p>
                  </div>
                  <p className="testimonials-carousel__person-rating">
                    {' '}
                    4.5{' '}
                    <span>
                      <img
                        className="testimonials-carousel__star"
                        src={process.env.PUBLIC_URL + 'images/star.svg'}
                        alt=""
                      />
                    </span>
                  </p>
                </div>
                <p className="testimonials-carousel__description">
                  “I like it because I like to travel far and still can connect with high speed”.
                </p>
              </div>
              <div className="testimonials-carousel  testimonials-carousel_second testimonials-carousel_active">
                <div className="testimonials-person">
                  <img className="person-img" src={process.env.PUBLIC_URL + 'images/kim.svg'} alt="person.jpg" />
                  <div className="person-info">
                    <p className="person-info__name">Kim Young Jou</p>
                    <p className="person-info__address">Soul,South Korea</p>
                  </div>
                  <p className="testimonials-carousel__person-rating">
                    {' '}
                    4.5{' '}
                    <span>
                      <img
                        className="testimonials-carousel__star"
                        src={process.env.PUBLIC_URL + 'images/star.svg'}
                        alt=""
                      />
                    </span>
                  </p>
                </div>
                <p className="testimonials-carousel__description">
                  “This is very unusual for my business that currently requires a virtual private network that has high
                  security.”.
                </p>
              </div>
            </div>

            <div className="testimonials-slider">
              <div className="testimonials-slider__group-1300">
                <img src={process.env.PUBLIC_URL + 'images/Group 1300.png'} alt="" />
              </div>
              <div className="testimonials-slider__buttons">
                <div className="testimonials-direction__button-left">
                  <img src={process.env.PUBLIC_URL + 'images/left.png'} alt="" />
                </div>
                <div className="testimonials-direction__button-right">
                  <img
                    className="testimonials-direction-button_white"
                    src={process.env.PUBLIC_URL + 'images/right.svg'}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Price;
