import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class RegistrationMenu extends React.Component {
    render() { 
        return (
        <ul className="nav nav-justified my-3 bg-light p-2 shadow-sm">
        <li className="nav-item">
            <NavLink to="/personal" className="nav-link" activeClassName="border-bottom border-primary" >
                <span >Personal</span>
            </NavLink>
        </li>
        <li className="nav-item ">
            <NavLink to="/address" className="nav-link" activeClassName="border-bottom border-primary" >
                <span >Address</span>
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/education" className="nav-link" activeClassName="border-bottom border-primary" >
                Education
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/citizenship" className="nav-link" activeClassName="border-bottom border-primary">
                Citizenship
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/parents" className="nav-link" activeClassName="border-bottom border-primary">
                Parents
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/photograph" className="nav-link" activeClassName="border-bottom border-primary">
                Photograph
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/documents" className="nav-link" activeClassName="border-bottom border-primary">
                Documents
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/complete" className="nav-link" activeClassName="border-bottom border-primary">
                Complete
            </NavLink>
        </li>
    </ul>
    );
    }
}
 
export default RegistrationMenu;