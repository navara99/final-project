import React from "react";
import { Button } from "@mui/material";

function GroupAction() {



  return (
    <div className="organization-action-btn">
      <Button variant="contained">Add Member</Button>
      <Button variant="contained">Edit</Button>
      <Button variant="contained">Delete</Button>
    </div>
  );
};

export default GroupAction;