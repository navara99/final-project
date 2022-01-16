import React from "react";
import { ListItem, Avatar, ListItemAvatar, ListItemText, IconButton } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';

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
      <IconButton color="primary" component="span" edge="start">
        <MessageIcon />
      </IconButton>

    </ListItem>
  )

};

export default MembersListItem;