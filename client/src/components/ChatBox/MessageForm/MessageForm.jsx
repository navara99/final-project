import React, { useState } from 'react'
import { Grid, TextField,Fab } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MessageForm = (props) => {
 const {messageText, handleSubmit, setMessageText} = props;
  return (
    <Grid container sx={{p: '20px'}} component="form" onSubmit={handleSubmit}>
        <Grid item xs={11}>
            <TextField id="message" name="message"  required fullWidth value={messageText} onChange={(e) => setMessageText(e.target.value)}/>
        </Grid>
        <Grid item xs={1} align="right">
            <Fab color="primary" aria-label="add" type="submit"><SendIcon /></Fab>
        </Grid>
    </Grid>
  )
}

export default MessageForm
