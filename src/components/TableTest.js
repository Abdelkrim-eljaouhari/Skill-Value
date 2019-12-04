import React, { Component } from 'react';
import uuid from 'uuid';
class TableTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableList: [
        {
          title: 'Developeur Front-End quiz niveau intermediaire',
          type: 'Quizz',
          catégorie: 'Front End',
          niveau: 'Moyen',
          lang: 'flag',
          isN_checkbox: [true, true],
          isChecked: [false, false]
        },
        {
          title: 'Other thing',
          type: 'Quizz',
          catégorie: 'Front ',
          niveau: 'hard',
          lang: 'flag',
          isN_checkbox: [true, true],
          isChecked: [false, false]
        }
      ]
    };
  }
  //The list should be generated by props
  render() {
    return (
      <tbody>
        {this.state.tableList.map(item => {
          const {
            title,
            type,
            catégorie,
            niveau,
            lang,
            isN_checkbox,
            isChecked
          } = item;

          return (
            <tr key={uuid()}>
              <th scope="row">
                {isN_checkbox[0] ? (
                  <div>
                    <input
                      type="checkbox"
                      name="vehicle1"
                      value="Bike"
                      className="checkbox-right-mg"
                    />
                    {title}
                  </div>
                ) : (
                  title
                )}
              </th>
              <td>
                {isN_checkbox[1] ? (
                  <div>
                    <input
                      type="checkbox"
                      name="vehicle1"
                      value="Bike"
                      className="checkbox-right-mg"
                    />
                    {type}
                  </div>
                ) : (
                  type
                )}
              </td>
              <td>{catégorie}</td>
              <td>{niveau}</td>
              <td>{lang}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableTest;
