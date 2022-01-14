import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faThList } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const MainButtons = () => {
  return (
    <div>
      <Button to="/" icon={faHome}/>
      <Link to="/jobs">
        <FontAwesomeIcon icon={faThList} />
      </Link>
    </div>
  );
};

export default MainButtons;
