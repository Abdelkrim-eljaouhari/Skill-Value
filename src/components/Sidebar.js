import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside className="sidebar-wrapper">
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <NavLink to="/campagne" activeClassName="active">
            Campagnes
          </NavLink>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <NavLink to="/test" activeClassName="active">
            Tests
          </NavLink>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <NavLink to="/candidat" activeClassName="active">
            Candidats
          </NavLink>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <NavLink to="/result" activeClassName="active">
            Results
          </NavLink>
        </a>
      </div>
      <hr />
    </aside>
  );
};

export default Sidebar;
