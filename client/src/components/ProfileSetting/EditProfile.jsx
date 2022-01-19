import { Grid, TextField, Typography,InputLabel, Avatar, Divider, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const EditProfile = ({currentUser}) => {
 
  return (
    <>
    {
      currentUser && (<Grid item container xs={9} sx={{backgroundColor:"#eff2f6", pr:4, pl:6}} >
            <Grid item container  xs={12} direction="column" sx={{height:"100%"}}>
              <Grid item sx={{flexGrow: "auto", my:3}}>
                <Typography variant='h4'>Edit Profile</Typography>
              </Grid>
              <Grid item container component="form" direction="column" sx={{flexGrow: 1}} justifyContent="space-evenly">
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
                    <TextField id="firstName" label="First name" variant="outlined" sx={{flexGrow:1,mr:2, bgcolor:"white"}}  value={currentUser.first_name}/>
                    <TextField id="lastName" label="Last name" variant="outlined" sx={{flexGrow:1,bgcolor:"white"}} value={ currentUser.last_name}/>
                </Box>
                <TextField id="email" label="Email" variant="outlined" sx={{bgcolor:"white"}} value={ currentUser.email}/>
                <TextField id="userName" label="User name" variant="outlined" sx={{bgcolor:"white"}} value={ currentUser.username}/>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <Avatar alt={ currentUser.username} src={ currentUser.profile_picture}/>
                  <TextField sx={{flexGrow:1, ml:2, bgcolor:"white"}}id="profile_picture" label="Picture URL" variant="outlined" value={currentUser.profile_picture} />
                </Box>
                <TextField id="bio" multiline label="Bio"variant="outlined" sx={{bgcolor:"white"}} value={ currentUser.bio}/>
                <Divider/>
                <Grid item>
                  <Button variant='contained'size='large'>Save</Button>
                  {/* <Button variant='contained' size='small' sx={{height:30}}>Cancel</Button> */}
                </Grid>
              </Grid>
            </Grid>
      </Grid>)

    }
    </>)
}

export default EditProfile
