import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const NavMenu = ({ showCovid, hideCovid, showComm, hideComm }) => {
  const handleClick = () => {
    hideCovid();
    hideComm();
  };
  return (
    <ul className="navmenu">
      <li className="navItem">
        <NavLink exact to="/" activeClassName="selected">
          <p onClick={() => handleClick()} className="nav-link">
            Home
          </p>
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink exact to="/about-us" activeClassName="selected">
          <p onClick={() => handleClick()} className="nav-link">
            About
          </p>
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink exact to="/services" activeClassName="selected">
          <p onClick={() => handleClick()} className="nav-link">
            Services
          </p>
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink exact to="/videos" activeClassName="selected">
          <p className="nav-link">Videos</p>
        </NavLink>
      </li>
      <li className="navItem">
        <p
          onClick={showCovid}
          style={{ color: "#DEB722" }}
          className="nav-link"
        >
          Covid-19
        </p>
      </li>
      <li className="navItem">
        <NavLink exact to="/contact" activeClassName="selected">
          <p className="nav-link">Contact</p>
        </NavLink>
      </li>
    </ul>
  );
};

export default withRouter(NavMenu);
