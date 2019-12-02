import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
  state = {
    isOpen: true
  };
  onSetSidebar = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen);
  };
  render() {
    const sidebar = this.state.isOpen
      ? ' sidebar-wrapper opened'
      : ' sidebar-wrapper closed';
    return (
      <aside className={sidebar}>
        <div className="list-group">
          <NavLink
            to="/dashboard"
            activeClassName="selected"
            className="list-group-item list-group-item-action"
          >
            <i className="fa fa-tachometer" />
            Dashboard
          </NavLink>

          <NavLink
            to="/campagne"
            activeClassName="selected"
            className="list-group-item list-group-item-action"
          >
            <i className="fas fa-pager" />
            Campagnes
          </NavLink>

          <NavLink
            to="/test"
            activeClassName="selected"
            className="list-group-item list-group-item-action"
          >
            <i className="fas fa-check-square" />
            Tests
          </NavLink>

          <NavLink
            to="/candidat"
            activeClassName="selected"
            className="list-group-item list-group-item-action"
          >
            <i className="fas fa-user-alt" />
            Candidats
          </NavLink>

          <NavLink
            to="/result"
            activeClassName="selected"
            className="list-group-item list-group-item-action"
          >
            <i className="fas fa-chart-line" />
            Results
          </NavLink>
        </div>
        <div
          className="control-sidebar position-absolute"
          onClick={this.onSetSidebar}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <hr />
      </aside>
    );
  }
}

export default Sidebar;
