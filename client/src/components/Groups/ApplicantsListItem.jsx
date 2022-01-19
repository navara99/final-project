import React from "react";
import { ListItem, IconButton, ListItemAvatar, ListItemText, Divider, Avatar, Button } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import { formatDate } from "../../helpers/date";

function ApplicantsListItem({ application }) {

  console.log(application);

  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <>
            <Button>
              Resume
            </Button>
            <Button>
              Cover Letter
            </Button>
            <IconButton>
              <MessageIcon />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar>
          <Avatar alt={application.username} src={application.profile_picture} />
        </ListItemAvatar>
        <ListItemText
          primary={`${application.first_name} ${application.last_name} (${application.username})`}
          secondary={
            <>
              <p>Email: {application.email}</p>
              <p>Submission Date: {formatDate(application.created_at)}</p>
            </>
          }
        />

      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default ApplicantsListItem;