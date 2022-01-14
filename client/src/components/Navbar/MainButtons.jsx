import React from "react";
import Button from "./Button";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';

const MainButtons = () => {
  return (
    <div>
      <Button to="/" Icon={HomeIcon}/>
      <Button to="/jobs" Icon={WorkIcon}/>
    </div>
  );
};

export default MainButtons;
