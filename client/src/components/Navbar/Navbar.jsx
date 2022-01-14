import "./Navbar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faThList, faSignInAlt, faRegistered, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/jobs">
          <FontAwesomeIcon icon={faThList} />
        </Link>
      </div>
      <div>
        <Link to="/login">
          <FontAwesomeIcon icon={faSignInAlt} />
        </Link>
        <Link to="/register">
          <FontAwesomeIcon icon={faRegistered} />
        </Link>
      </div>
    </div>
  );
}
