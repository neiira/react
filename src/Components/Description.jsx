import React from 'react';
import Buttonprimary from '../Components/Buttonprimary';

function Description() {
  return (
    <div>
      <section className="paragraph-section">
        <div className="wrapper paragraph-section__wrapper">
          <div className="paragraph-section__row">
            <div className="paragraph-section__column">
              <h1 className="ps-column__h1">Want anything to be easy with LaslesVPN.</h1>
              <p className="ps-column__p">
                Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features
                from us.
              </p>
              <Buttonprimary child="Get Started" />
            </div>
            <div className="paragraph-section__column">
              <img src={process.env.PUBLIC_URL + 'images/Illustration 1.svg'} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Description;
