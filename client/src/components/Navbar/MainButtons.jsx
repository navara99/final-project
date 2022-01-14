import React from "react";
import { faHome, faThList } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const MainButtons = () => {
  return (
    <div>
      <Button to="/" icon={faHome}/>
      <Button to="/jobs" icon={faThList}/>
    </div>
  );
};

export default MainButtons;
