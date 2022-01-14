import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faRegistered } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainButtons from "./MainButtons";

const Navbar = ({ currentUser }) => {
  return (
    <div className="navbar">
      <MainButtons />
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
};

export default Navbar;
