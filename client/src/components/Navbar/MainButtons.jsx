import React from "react";
import Button from "./Button";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";

const MainButtons = () => {
  return (
    <div>
      <Button {...{ to: "/", Icon: HomeIcon, text: "Home" }} />
      <Button {...{ to: "/jobs", Icon: WorkIcon, text: "Job Board" }} />
    </div>
  );
};

export default MainButtons;
