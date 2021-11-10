import React from 'react';

function Buttonprimary({ child }) {
  return (
    <button className="ps-column__button" type="button">
      {child}
    </button>
  );
}

export default Buttonprimary;
