import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside className="sidebar-wrapper">
      <div className="list-group">
        <NavLink
          to="/dashboard"
          activeClassName="selected"
          className="list-group-item list-group-item-action"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/campagne"
          activeClassName="selected"
          className="list-group-item list-group-item-action"
        >
          Campagnes
        </NavLink>

        <NavLink
          to="/test"
          activeClassName="selected"
          className="list-group-item list-group-item-action"
        >
          Tests
        </NavLink>

        <NavLink
          to="/candidat"
          activeClassName="selected"
          className="list-group-item list-group-item-action"
        >
          Candidats
        </NavLink>

        <NavLink
          to="/result"
          activeClassName="selected"
          className="list-group-item list-group-item-action"
        >
          Results
        </NavLink>
      </div>
      <hr />
    </aside>
  );
};

export default Sidebar;
