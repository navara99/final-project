import React from "react";
import { Link } from "react-router-dom";

const Button = ({ Icon, to }) => {
  return (
    <Link to={to} className="navbar-button">
      <Icon />
    </Link>
  );
};

export default Button;
