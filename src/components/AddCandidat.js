import React, { Component } from 'react';
import Orangebutton from './Orangebutton';
class AddCandidat extends Component {
  state = { isOpen: true };
  render() {
    return (
      <form className="add-contatct-form">
        <table className="table table-borderless add-contact-table">
          <div className="fildset">
            <input className="add-condidate-input" type="text" />
            <span className="small-title">Prénom</span>
          </div>
          <input
            className="add-condidate-input"
            type="text"
            placeholder="Nom"
          />
          <input
            className="add-condidate-input"
            type="text"
            placeholder="Adresse-Email"
          />

          <Orangebutton
            title="Créer une campagne"
            iconClassName="fas fa-plus"
          />
        </table>
      </form>
    );
  }
}

export default AddCandidat;
