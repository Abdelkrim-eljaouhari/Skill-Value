import React from 'react';
const SearchInput = ({ title, iconClassName }) => {
  return (
    <div className="search-input-wrapper">
      <input type="search" className="search-input" placeholder={title} />

      <span className="inner-span">
        <i className={iconClassName}></i>
      </span>
    </div>
  );
};

export default SearchInput;
