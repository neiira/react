import React from 'react';

function Service() {
  return (
    <div>
      <section className="third-section">
        <div className="wrapper">
          <div className="third-section__row">
            <div>
              <div className="third-section__column">
                <div className="img-box img-user">
                  <img src={process.env.PUBLIC_URL + 'images/user.svg'} alt="" />
                </div>
                <div className="icon-group">
                  <p className="icon-num">90+</p>
                  <p>User</p>
                </div>
              </div>
            </div>
            <div className="third-section__column">
              <div className="img-box img-location">
                <img src={process.env.PUBLIC_URL + 'images/location.svg'} alt="" />
              </div>
              <div className="icon-group">
                <p className="icon-num">30+</p>
                <p>Location</p>
              </div>
            </div>
            <div className="third-section__column">
              <div className="img-box img-server">
                <img src={process.env.PUBLIC_URL + 'images/Server.svg'} alt="" />
              </div>
              <div className="icon-group">
                <p className="icon-num">95+</p>
                <p>Server</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
