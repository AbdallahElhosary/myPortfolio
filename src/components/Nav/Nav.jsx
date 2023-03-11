import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="rounded-pill">
      <NavLink to="/" title="Home"><i className="fa-solid fa-house"></i></NavLink>
      <NavLink to="/about" title="About"><i className="fa-sharp fa-solid fa-mug-saucer"></i></NavLink>
      <NavLink to="/portfolio" title="Portfolio"><i className="fa-solid fa-user"></i></NavLink>
      <NavLink to="/contact" title="Contact"><i className="fa-solid fa-address-card"></i></NavLink>
    </nav>
  )
}

export default Navbar;