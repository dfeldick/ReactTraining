import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <p><NavLink to="/create" activeClassName="is-active">Create</NavLink></p>
    <NavLink to="/edit/23" activeClassName="is-active">Edit</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
  </header>
)

export default Header;