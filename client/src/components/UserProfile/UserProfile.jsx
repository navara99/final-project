import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
const UserProfile = ({currentUser}) => {
  return ( <>{
    currentUser &&
    (<Grid xs={12} container sx={{backgroundColor:"#eff2f6"}}>
    <Grid item container direction="column">
      <Grid>
        <Avatar alt="profile" src={currentUser.profile_picture} sx={{width:150, height:150}}/>
        <Typography>{`${currentUser.first_name} ${currentUser.last_name}`}</Typography>
        <Typography>{currentUser.usename}</Typography>
        <Typography>{currentUser.email}</Typography>
        <Typography>{currentUser.bio}</Typography>
      </Grid>
      <Grid>
        <Typography>List of Organizations</Typography>
      </Grid>
      <Grid>
        <Typography>Applied Jobs</Typography>
      </Grid>
      
    </Grid>
  </Grid>)
  }

  </>

  )
}

export default UserProfile


