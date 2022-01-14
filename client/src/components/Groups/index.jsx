import React from "react";
import {
  List,
  ListItemText,
  Button,
  Card
} from "@mui/material";
import GroupAction from "./GroupAction";
import { Add } from "@mui/icons-material";
import "./groups.css";
import GroupListItem from "./GroupListItem";

function Groups() {


  return (
    <div className="groups-container">
      <div className="organization-header">
        <h1>Your Organizations</h1>
        <Button variant="contained" startIcon={<Add />}>Add Organization</Button>
      </div>
      <List sx={{ width: '90%', paddingTop: "2em" }}>
        <GroupListItem />
      </List>
    </div>
  )
}

export default Groups;