import React from 'react';

const Orangebutton = ({ title, iconClassName }) => {
  return (
    <button className="orange-btn">
      {title}
      {iconClassName && (
        <span className="main-btn-inner-span">
          <i className={iconClassName}></i>
        </span>
      )}
    </button>
  );
};

export default Orangebutton;
