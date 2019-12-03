import React from 'react';
import Logo from './Logo';
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <div className="left-side">
        <Logo />
      </div>
      <div className="right-side">
        <span className="display-n-r">
          <p>Welcome back member</p>
          <p> Pyxicom company</p>
        </span>
        <span className="avatar">
          {/*--- the user picture here as background ---*/}
        </span>
        <span>{/* clickable button here */}</span>
      </div>
    </nav>
  );
};

export default Navbar;
