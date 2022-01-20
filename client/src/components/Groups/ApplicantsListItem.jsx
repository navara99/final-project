import React from "react";
import {
  ListItem,
  IconButton,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  Button,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { formatDate } from "../../helpers/date";
import Resume from "./Resume";
import { useState } from "react";
import CoverLetter from "./CoverLetter";
import { Link } from "react-router-dom";

function ApplicantsListItem({ application }) {
  const [openResume, setOpenResume] = useState(false);
  const [openCoverLetter, setOpenCoverLetter] = useState(false);
  console.log(application.id);

  return (
    <>
      <CoverLetter
        {...{ application }}
        {...{ setOpenCoverLetter }}
        {...{ openCoverLetter }}
      />
      <Resume {...{ application }} {...{ setOpenResume }} {...{ openResume }} />
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <>
            <Button onClick={() => setOpenResume(!openResume)}>Resume</Button>
            <Button onClick={() => setOpenCoverLetter(!openCoverLetter)}>
              Cover Letter
            </Button>
            <IconButton>
              <Link
                to="/messages"
                state={{
                  contactId: application.user_id,
                  contactFirstName: application.first_name,
                  contactLastName: application.last_name,
                  contactProfilePicture: application.profile_picture,
                }}
              >
                <IconButton color="primary" component="span" edge="start">
                  <MessageIcon />
                </IconButton>
              </Link>
            </IconButton>
          </>
        }
      >
        <ListItemAvatar>
          <Avatar
            alt={application.username}
            src={application.profile_picture}
          />
        </ListItemAvatar>
        <ListItemText
          primary={`${application.first_name} ${application.last_name} (${application.username})`}
          secondary={`Email: ${
            application.email
          } ~ Submission Date: ${formatDate(application.created_at)}`}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default ApplicantsListItem;
