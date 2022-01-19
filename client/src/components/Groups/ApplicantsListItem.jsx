import React from "react";
import { ListItem, ListItemAvatar, ListItemText, Divider, Avatar, Typography } from "@mui/material";

function ApplicantsListItem({ application }) {

  console.log(application);

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={application.username} src={application.profile_picture} />
        </ListItemAvatar>
        <ListItemText
          primary={`${application.first_name} ${application.last_name}`}
          secondary={application.message}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default ApplicantsListItem;