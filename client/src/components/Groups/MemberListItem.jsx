import React from "react";
import { ListItem, Avatar, ListItemAvatar, ListItemText } from "@mui/material";

function MembersListItem({ member }) {

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="Travis Howard" src={`${member.profile_picture}`} />
      </ListItemAvatar>
      <ListItemText
        primary={`${member.first_name} ${member.last_name}`}
        secondary={
          <>
            <p>Username: @{member.username}</p>
            <p>Email: {member.email}</p>
          </>}
      />
    </ListItem>
  )

};

export default MembersListItem;