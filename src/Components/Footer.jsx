import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="wrapper">
          <div className="footer-row">
            <div className="footer-col1">
              <div className="footer-col1__logobox">
                <img src={process.env.PUBLIC_URL + 'images/Logo.png'} alt="" />
              </div>
              <div className="footer-col1__descripton">
                <p className="company-description">
                  <strong>LaslesVPN</strong> is a private virtual network that
                  <br /> has unique features and has high security.
                </p>
              </div>
              <div className="social-media-contact">
                <a href="#">
                  <img src={process.env.PUBLIC_URL + 'images/Facebook.png'} alt="" />
                </a>
                <a href="#">
                  <img src={process.env.PUBLIC_URL + 'images/Twitter.png'} alt="" />
                </a>
                <a href="#">
                  <img src={process.env.PUBLIC_URL + 'images/Instagram.png'} alt="" />
                </a>
              </div>
              <div className="copyright">
                <p>©2020LaslesVPN</p>
              </div>
            </div>
            <div className="footer-col2">
              <div className="footer-col2__row">
                <div className="footer-col2__col1">
                  <p className="footer-points-title">Product</p>
                  <ul className="points-list">
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        Download
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        Location
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        Server
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        Countries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        blogs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col2__col2">
                  <p className="footer-points-title">Engage</p>
                  <ul className="points-list">
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        LaslesVPN ?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        terms of services
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col2__col3">
                  <p className="footer-points-title">Earn Moneny</p>
                  <ul className="points-list">
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        Affiliate
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footer-content-itemlist">
                        Become Partner
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
