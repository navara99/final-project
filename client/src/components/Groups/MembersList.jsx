import React from "react";
import { ListItemText, List, ListItem, Card, IconButton, Collapse, CardActions, CardMedia } from "@mui/material";

function MembersList({ members }) {

  const member = members[0]

  return (
    <List>
      <ListItem>
        <div>
          <ListItemText
            primary={`${member.first_name} ${member.last_name}`}
            secondary={
              <>
                <p>Username: @{member.username}</p>
                <p>Email: {member.email}</p>
              </>}
          />
        </div>
      </ListItem>
    </List >
  )

}

export default MembersList;