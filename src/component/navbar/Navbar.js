import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navTab">
        <span className="logoText">Logo</span>
        <NavLink to="/dashboard/userdetails">UserDetails</NavLink>
        <NavLink to="/dashboard/imageupload">ImageUpload</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
