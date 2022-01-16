import React from 'react';
import {ListItem,Grid,ListItemText,Paper } from "@mui/material"
const MessageListItem = ({message}) => {
  const {text, created_at, sender_id} = message
  return (
    <ListItem >
      <Grid container >
          <Grid item xs={12} >
              <ListItemText align={sender_id === 1 ? "right" : "left"} primary={text}></ListItemText>
          </Grid>
          <Grid item xs={12}>
              <ListItemText align={sender_id === 1 ? "right" : "left"} secondary={created_at}></ListItemText>
          </Grid>
      </Grid>
    </ListItem> 
  )
}

export default MessageListItem
