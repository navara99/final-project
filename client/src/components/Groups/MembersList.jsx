import React from "react";
import { ListItemText, List, ListItem, ListItemAvatar, Avatar, IconButton } from "@mui/material";

function MembersList({ members }) {

  const member = members[0]

  return (
    <List>
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
    </List >
  )

}

export default MembersList;