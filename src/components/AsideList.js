import React, { Component } from 'react';
import uuid from 'uuid';
class AsideList extends Component {
  state = {
    list: ['Code', 'Tests'] // this should be gotten from the aside instance via props
  };
  render() {
    const { listTitle, checkboxType } = this.props;
    return (
      <div className="aside-list-wrapper">
        <p className="list-title">{listTitle}</p>
        {this.state.list.map(item => {
          return (
            <li key={uuid()}>
              <input type="checkbox" name={checkboxType} value="Bike" /> {item}
            </li>
          );
        })}
      </div>
    );
  }
}

export default AsideList;
