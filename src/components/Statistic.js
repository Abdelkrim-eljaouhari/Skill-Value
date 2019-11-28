import React from 'react';
import Orangebutton from './Orangebutton';
const Statistic = () => {
  return (
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action ">
        <h5 className="">Hello world</h5>
        <p>color</p>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        Dapibus ac facilisis in
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        Morbi leo risus
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        Porta ac consectetur ac
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <Orangebutton title="Acheter des Crédits" />
      </a>
    </div>
  );
};

export default Statistic;
