import React from "react";
import { ListItemText, Card } from "@mui/material";
import GroupAction from "./GroupAction";

function GroupListItem({ group, openAddMembersModal, setOpenAddMembersModal, selectedGroup, setSelectedGroup }) {

  const cardStyles = {
    padding: "2em",
    margin: "1em"
  };

  return (
    <Card style={cardStyles} alignItems="flex-start">
      <ListItemText
        primary={<h3 className="organization-card-name">{group.name}</h3>}
        secondary={group.description}
      />
      <GroupAction
        {...{ openAddMembersModal }}
        {...{ setOpenAddMembersModal }}
        {...{ group }}
        {...{ selectedGroup }}
        {...{ setSelectedGroup }}
      />
    </Card>
  )
};

export default GroupListItem;