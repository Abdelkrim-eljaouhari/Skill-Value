import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import toggleSideBar from '../redux/actions/toggleSideBar';
import resizeBar from '../redux/actions/resizeBar';

class Sidebar extends Component {
  onToggleSideBar = () => {
    this.props.dispatch(toggleSideBar());
  };
  componentDidMount = () => {
    window.addEventListener('resize', () => {
      if (document.body.clientWidth <= 680) {
        this.props.dispatch(resizeBar());
      }
    });
  };
  render() {
    return (
      <aside className="sidebar-wrapper">
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
            Resultas
          </NavLink>
        </div>
        <div
          className="control-sidebar position-absolute"
          onClick={this.onToggleSideBar}
        >
          {this.props.state ? (
            <i className="fas fa-arrow-left"></i>
          ) : (
            <i className="fas fa-arrow-right"></i>
          )}
        </div>
        <hr />
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Sidebar);
