import React from 'react';

function Feature() {
  return (
    <div>
      <section className="feature" id="feature">
        <div className="wrapper feature-row">
          <div className="feauture-col feature-img">
            <img src={process.env.PUBLIC_URL + 'images/Illustration 3.svg'} alt="" />
          </div>
          <div className="feature-col">
            <div className="feature-text">
              <p>We Provide Many Features You Can Use</p>
            </div>
            <div className="feature-description">
              <p>
                You can explore the features that we provide with fun
                <br />
                and have their own functions each feature.
              </p>
            </div>
            <div className="feature-list">
              <ul className="feature-list__items">
                <li>
                  <img src={process.env.PUBLIC_URL + 'images/Group 1120.svg'} alt="" className="groupimg-1120" />
                  online protection.
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + 'images/Group 1120.svg'} alt="" className="groupimg-1120" />
                  Internet without borders.
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + 'images/Group 1120.svg'} alt="" className="groupimg-1120" />
                  Supercharged VPN.
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + 'images/Group 1120.svg'} alt="" className="groupimg-1120" />
                  No specific time limits.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
