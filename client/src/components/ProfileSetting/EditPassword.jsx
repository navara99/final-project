import React from 'react'
import { Grid, TextField, Typography, Divider, Button } from '@mui/material'

const EditPassword = () => {
  return (
    (
      <Grid item container xs={9} sx={{backgroundColor:"#eff2f6", pr:4, pl:6}} >
            <Grid item container  xs={12} direction="column" sx={{height:"100%"}}>
              <Grid item sx={{flexGrow: "auto", my:3}}>
                <Typography variant='h4'>Password & Security</Typography>
              </Grid>
              <Grid item container component="form" direction="column" sx={{flexGrow: 1}} justifyContent="space-evenly">

                <TextField id="currentPassword" label="Current Password" variant="outlined" sx={{bgcolor:"white"}} required/>
                <TextField id="newPassword" label="New Password" variant="outlined" sx={{bgcolor:"white"}} required/>
                <TextField id="confirmPassword" label="Confirm Password "variant="outlined" sx={{bgcolor:"white"}} required/>
                <Divider/>
                <Grid item>
                  <Button variant='contained'size='large'>Save</Button>
                  {/* <Button variant='contained' size='small' sx={{height:30}}>Cancel</Button> */}
                </Grid>
              </Grid>
            </Grid>
      </Grid>
    )
  )
}

export default EditPassword
