import React, { Component } from 'react';

class AsideList extends Component {
  render() {
    const { listTitle } = this.props;
    return (
      <div className="aside-list-wrapper">
        <p className="list-title">{listTitle}</p>
      </div>
    );
  }
}

export default AsideList;
