import React, { Component } from 'react';
import uuid from 'uuid';

class TableCandidat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableList: [
        {
          prénom: 'Ahmed',
          nom: 'Jaadi',
          email: 'a.ajaadi@gmail.com',
          scoreGlobal: 'Moyen',
          isN_checkbox: [true]
          //isChecked: [false]
        },
        {
          prénom: 'Other thing',
          nom: 'Quizz',
          email: 'Front End',
          scoreGlobal: 'hard',

          isN_checkbox: [true]
          //isChecked: [false]
        }
      ]
    };
  }
  render() {
    return (
      <tbody>
        {this.state.tableList.map(item => {
          const { prénom, nom, email, scoreGlobal, isN_checkbox } = item;

          return (
            <tr key={uuid()}>
              <th scope="row">
                {isN_checkbox[0] ? (
                  <div>
                    {/*--can not be here error--*/}
                    <input
                      nom="checkbox"
                      type="checkbox"
                      name="vehicle1"
                      value="Bike"
                      className="checkbox-right-mg"
                    />
                    {prénom}
                  </div>
                ) : (
                  prénom
                )}
              </th>
              <td>{nom}</td>
              <td>{email}</td>
              <td>{scoreGlobal}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableCandidat;
