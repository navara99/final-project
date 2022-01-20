import React from "react";
import { ListItem, Grid, ListItemText, Button } from "@mui/material";
import moment from "moment";
import BasicScrollToBottom from "react-scroll-to-bottom/lib/BasicScrollToBottom";

const MessageListItem = (props) => {
  const { message, created_at, sender_id, is_invitation } = props.message;
  const currentUser = props.currentUser;

  return (
    <>
      {currentUser && (
        <ListItem
          style={{
            justifyContent:
              sender_id === currentUser.id ? "flex-end" : "flex-start",
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              {is_invitation && sender_id !== currentUser.id ? (
                <ListItemText
                  align="left"
                  primary={
                    <>
                      {message}
                      <div style={{marginTop: "1em"}}>
                        <Button
                          variant="contained"
                          style={{ marginRight: "0.5em" }}
                        >
                          Accept
                        </Button>
                        <Button variant="outlined">Reject</Button>
                      </div>
                    </>
                  }
                ></ListItemText>
              ) : (
                <ListItemText
                  align={sender_id === currentUser.id ? "right" : "left"}
                  primary={message}
                ></ListItemText>
              )}
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
