import React, { Component } from 'react';
import Orangebutton from './Orangebutton';
class AddCandidat extends Component {
  constructor(props) {
    super(props);
    this.focused = React.createRef();
    this.state = { isOpen: true };
  }
  componentDidMount = () => {
    this.focused.current.focus();
  };

  render() {
    return (
      <form className="add-contatct-form">
        <div className="table table-borderless add-contact">
          <div className="fildset">
            <input
              className="add-condidate-input"
              type="text"
              ref={this.focused}
            />
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
        </div>
      </form>
    );
  }
}

export default AddCandidat;
