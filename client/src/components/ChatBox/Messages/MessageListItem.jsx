import React from 'react';
import {ListItem,Grid,ListItemText,Paper } from "@mui/material";
import moment from "moment"

const MessageListItem = (props) => {
  const {message, created_at, sender_id} = props.message
  return (
    <ListItem >
      <Grid container>
          <Grid item xs={12} >
              <ListItemText align={sender_id === 1 ? "right" : "left"} primary={message}></ListItemText>
          </Grid>
          <Grid item xs={12}>
              <ListItemText align={sender_id === 1 ? "right" : "left"} secondary={moment(`${created_at}`).fromNow()}></ListItemText>
          </Grid>
      </Grid>
    </ListItem> 
  )
}

export default MessageListItem
