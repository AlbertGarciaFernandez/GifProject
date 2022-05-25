import React from "react";

import { Link } from "react-router-dom";

import { logout, useAuth } from "../../firebase/auth";

function Navbar() {
  const currentUser = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        GifOne
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <Link to="/search" className="">
                Home
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link to="/login" className="">
                Login
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link to="/upload" className="">
                Upload
              </Link>
            </a>
          </li>
        </ul>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
