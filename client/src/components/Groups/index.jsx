import React from "react";
import { List, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import "./groups.css";
import GroupListItem from "./GroupListItem";
import GroupForm from "./GroupForm";
import { useState } from "react";

function Groups() {
  const [openForm, setOpenForm] = useState(false);



  return (
    <div className="groups-container">
      <div className="organization-header">
        <h1>Your Organizations</h1>
        <Button variant="contained" startIcon={<Add />} onClick={() => setOpenForm(!openForm)}>Add Organization</Button>
        <GroupForm {...{ openForm }} {...{ setOpenForm }} />
      </div>
      <List sx={{ width: '90%', paddingTop: "2em" }}>
        <GroupListItem />
      </List>
    </div>
  )
}

export default Groups;