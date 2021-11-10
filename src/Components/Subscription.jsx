import React from 'react';
import Buttonprimary from '../Components/Buttonprimary';

function Subscription() {
  return (
    <div>
      <section className="subscription">
        <div className="subscription__div section_whitespace_aside">
          <div className="subscription-info">
            <p className="subscription-info-title">Subscribe Now for Get Special Features!</p>
            <p className="subscription-info-description">Let's subscribe with us and find the fun.</p>
          </div>
          <Buttonprimary child="Subscribe" />
        </div>
      </section>
    </div>
  );
}

export default Subscription;
