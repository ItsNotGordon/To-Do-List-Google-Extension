import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-muted" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-muted" to="tasks/">To-Do List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-muted" to="tasks/create">Create a Task</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-muted" to="/">Edit a Task</NavLink>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Nav;
