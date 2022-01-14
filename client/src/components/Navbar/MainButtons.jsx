import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faThList } from "@fortawesome/free-solid-svg-icons";

const MainButtons = () => {
  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/jobs">
        <FontAwesomeIcon icon={faThList} />
      </Link>
    </div>
  );
};

export default MainButtons;
