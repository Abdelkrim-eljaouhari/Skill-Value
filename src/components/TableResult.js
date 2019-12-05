import React, { Component } from 'react';
import uuid from 'uuid';
class TableResult extends Component {
  state = {
    tableList: [
      {
        person: {
          name: 'Ahemd',
          email: 'Ahmed@gmail.com'
        },
        canpagne: 'Jaadi',
        détail: 'PHP',
        score: 'Terminé',
        actions: 'Rapport',
        isDone: true
      },
      {
        person: {
          name: 'Ahemd',
          email: 'Ahmed@gmail.com'
        },
        canpagne: 'Jaadi',
        détail: 'PHP',
        score: 'Terminé',
        actions: 'Rapport',
        isDone: true
      }
    ]
  };
  render() {
    return (
      <tbody>
        {this.state.tableList.map(item => {
          const { person, canpagne, détail, score, actions, isDone } = item;

          return (
            <tr key={uuid()}>
              <th scope="row">
                <p className="table-colored-element table-two-p">
                  {person.name}
                </p>
                <b />
                <p className="table-two-p">{person.email}</p>
              </th>
              <td className="table-colored-element">{canpagne}</td>
              <td className="table-colored-element">{détail}</td>
              <td className="table-colored-element">
                {isDone ? (
                  <>
                    <i className="fas fa-check done"></i>
                    <span className="done">{score}</span>
                  </>
                ) : (
                  { score }
                )}
              </td>
              <td className="table-colored-element">
                <small className="text-muted">{actions}</small>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableResult;
