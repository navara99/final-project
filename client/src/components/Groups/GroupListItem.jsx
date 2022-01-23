import React from "react";
import { ListItemText, Card, CardActions } from "@mui/material";
import GroupAction from "./GroupAction";
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function GroupListItem({ group, openAddMembersModal, setOpenAddMembersModal, selectedGroup, setSelectedGroup, cardStyles, setMyGroups }) {

  return (
    <Card alignItems="flex-start" style={cardStyles}>
      <div className="organization-card">
        <Link to={`/organizations/${group.id}`} style={{ textDecoration: 'none', display: "flex", color: "black" }}>
          <img
            alt={group.name}
            className="organization-logo"
            src={`${group.logo}`}
          />
          <ListItemText
            primary={<h3 className="organization-card-name">{group.name}</h3>}
            secondary={<p>{group.description}</p>}
          />
        </Link>
        <CardActions>
          <GroupAction {...{ openAddMembersModal, setMyGroups, group, setSelectedGroup, selectedGroup }} />
        </CardActions>
      </div>
    </Card >
  )
};

export default GroupListItem;