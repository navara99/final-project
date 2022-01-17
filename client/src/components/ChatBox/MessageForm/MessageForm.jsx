import React, { useState } from 'react'
import { Grid, TextField,Fab } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const MessageForm = () => {
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("mes", message);

    setMessage('');
  }
  return (
    <Grid container sx={{p: '20px'}} component="form" onSubmit={handleSubmit}>
        <Grid item xs={11}>
            <TextField id="message" name="message"  required fullWidth value={message} onChange={(e) => setMessage(e.target.value)}/>
        </Grid>
        <Grid item xs={1} align="right">
            <Fab color="primary" aria-label="add" type="submit"><SendIcon /></Fab>
        </Grid>
    </Grid>
  )
}

export default MessageForm
