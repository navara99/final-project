import React from "react";
import { Button } from "@mui/material";
import GroupsBtn from "./GroupsBtn";

function GroupAction() {



  const btnTexts = ["Add Member", "Edit", "Delete"];

  const btns = btnTexts.map((text) => {
    return <GroupsBtn {...{ text }} />
  });


  return (
    <div className="organization-action-btn">
      {btns}
    </div>
  );
};

export default GroupAction;