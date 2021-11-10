import React from 'react';

function Buttons({ text }) {
  return (
    <button type="button" className="select-btn">
      {text}
    </button>
  );
}

export default Buttons;
