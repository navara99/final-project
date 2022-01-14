import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icon, to }) => {
  return (
    <Link to={to}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};

export default Button;
