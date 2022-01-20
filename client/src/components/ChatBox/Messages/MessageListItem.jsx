import React from "react";
import { ListItem, Grid, ListItemText } from "@mui/material";
import moment from "moment";
import BasicScrollToBottom from "react-scroll-to-bottom/lib/BasicScrollToBottom";

const MessageListItem = ({currentUser, message}) => {
  const { message, created_at, sender_id, is_invitation } = message;

  return (
    <>
      {currentUser && (
        <ListItem>
          <Grid container>
            <Grid item xs={12}>
              <ListItemText
                align={sender_id === currentUser.id ? "right" : "left"}
                primary={message}
              ></ListItemText>
            </Grid>
            <Grid item xs={12}>
              <ListItemText
                align={sender_id === currentUser.id ? "right" : "left"}
                secondary={moment(`${created_at}`).fromNow()}
              ></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
      )}
    </>
  );
};

export default MessageListItem;
