import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" id="navcolo">
        <Link to="/" className="navbar-brand">
          Job Hunter
        </Link>
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
            <li className="navbar-item">
              <Link to="/company-list" className="nav-link">
                Company List
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create-job" className="nav-link">
                Create Job Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create-company" className="nav-link">
                Create Company
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/search-job" className="nav-link">
                Search Jobs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
