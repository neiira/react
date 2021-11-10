import React from 'react';
import Buttons from '../Components/Buttons';
function Navbar() {
  return (
    <section className="header">
      <div className="nav-container">
        <div className="wrapper">
          <nav className="nav-bar">
            <div className="row__nav-bar">
              <div className="column__nav-bar logo">
                <img src={process.env.PUBLIC_URL + 'images/Logo.png'} alt="hello" />
              </div>
              <div className="column__nav-bar">
                <ul className="nav-items">
                  <li className="font-color">
                    <a href="#footer" className="nav-items__decoration">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#feature" className="nav-items__decoration">
                      Feature
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="nav-items__decoration">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#testimonial" className="nav-items__decoration">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="nav-items__decoration">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column__nav-bar">
                <ul className="nav-bar__auth">
                  <li>
                    <a href="index.html" className="nav-items__decoration">
                      log in
                    </a>
                  </li>
                  <li>
                    <Buttons text="sign up" />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
