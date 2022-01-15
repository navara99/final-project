import React from "react";
import { ListItemText, Card } from "@mui/material";
import GroupAction from "./GroupAction";
import { useState } from "react";

function GroupListItem({ description, name, openAddMembersModal, setOpenAddMembersModal }) {

  const cardStyles = {
    padding: "2em",
    margin: "1em"
  };

  return (
    <Card style={cardStyles} alignItems="flex-start">
      <ListItemText
        primary={<h3 className="organization-card-name">{name}</h3>}
        secondary={description}
      />
      <GroupAction {...{ openAddMembersModal }} {...{ setOpenAddMembersModal }} />
    </Card>
  )
};

export default GroupListItem;