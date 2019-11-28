import React from 'react';
import Orangebutton from './Orangebutton';
const Title = ({ menuTitle }) => {
  return (
    <>
      <header className="col-lg-12 title-header-wrapper">
        <div className="title-header">
          <div className="title-page">
            <h2 className="menu-title">{menuTitle}</h2>
          </div>
          <div className="title-btns">
            <Orangebutton
              title="Nouvelle campagne"
              iconClassName="fas fa-plus"
            />
          </div>
        </div>
        <hr className="line" />
      </header>
    </>
  );
};

export default Title;
