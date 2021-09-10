import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class RegistrationMenu extends React.Component {
  render() {
    return (
      <ul className="nav nav-pills nav-justified my-3 bg-light p-2 shadow-sm">
        <li className="nav-item">
          <NavLink
            to="/personal"
            className="nav-link text-dark"
            activeClassName="border-bottom border-success"
          >
            <span>Personal</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/address"
            className="nav-link text-dark"
            activeClassName="border-bottom border-success"
          >
            <span>Address</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/education"
            className="nav-link text-dark"
            activeClassName="border-bottom border-success"
          >
            Education
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/citizenship"
            className="nav-link text-dark"
            activeClassName="border-bottom border-success"
          >
            Citizenship
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/parents"
            className="nav-link text-dark"
            activeClassName="border-bottom border-success"
          >
            Parents
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/photograph"
            className="nav-link text-dark"
            activeClassName="border-bottom border-success"
          >
            Photograph
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/documents"
            className="nav-link text-dark"
            activeClassName="border-bottom border-success"
          >
            Documents
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/complete"
            className="nav-link text-dark"
            activeClassName="border-bottom border-success"
          >
            Complete
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default RegistrationMenu;
