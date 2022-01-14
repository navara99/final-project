import React from "react";
import { faHome, faThList } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import HomeIcon from '@mui/icons-material/Home';

const MainButtons = () => {
  return (
    <div>
      <Button to="/" Icon={HomeIcon}/>
      {/* <Button to="/jobs" Icon={faThList}/> */}
    </div>
  );
};

export default MainButtons;
