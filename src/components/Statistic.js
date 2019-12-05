import React from 'react';
import Orangebutton from './Orangebutton';
const Statistic = () => {
  return (
    <div className="list-group flex-column-r">
      <a href="#" className="list-group-item list-group-item-action ">
        <p>Emploi</p>
        <small className="text-muted">un texte içi</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <p>Emploi</p>
        <small className="text-muted">un texte içi</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <p>Emploi</p>
        <small className="text-muted">un texte içi</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <p>Emploi</p>
        <small className="text-muted">un texte içi</small>
      </a>
      <a
        href="#"
        className="list-group-item list-group-item-action display-block-r"
      >
        <Orangebutton title="Acheter des Crédits" />
      </a>
    </div>
  );
};

export default Statistic;
