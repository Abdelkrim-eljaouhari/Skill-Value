import React from 'react';
import Orangebutton from './Orangebutton';
const Title = ({ menuTitle, btnsNumber }) => {
  return (
    <>
      <header className="col-xl-12 title-header-wrapper ">
        <div className="title-header">
          <div className="title-page">
            <h2 className="menu-title">{menuTitle}</h2>
          </div>
          <div className="title-btns">
            {btnsNumber.map((item, i) => {
              return (
                <Orangebutton key={i} title={item[0]} iconClassName={item[1]} />
              );
            })}
          </div>
        </div>
        <hr className="line" />
      </header>
    </>
  );
};

export default Title;
