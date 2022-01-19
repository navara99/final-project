import { Grid, TextField, Typography,InputLabel, Avatar, Divider, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

const EditProfile = ({currentUser}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if(currentUser) {
      const {first_name, last_name, email, username, profile_picture, bio} = currentUser;
      setFirstName(first_name);
      setLastName(last_name);
      setEmail(email);
      setUsername(username);
      setProfilePicture(profile_picture);
      setBio(bio);
    }

  },[currentUser])

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
                    <TextField id="firstName" label="First name" variant="outlined" sx={{flexGrow:1,mr:2, bgcolor:"white"}}  value={firstName} required/>
                    <TextField id="lastName" label="Last name" variant="outlined" sx={{flexGrow:1,bgcolor:"white"}} value={ lastName} required/>
                </Box>
                <TextField id="email" label="Email" variant="outlined" sx={{bgcolor:"white"}} value={email} required/>
                <TextField id="userName" label="User name" variant="outlined" sx={{bgcolor:"white"}} value={username} required/>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <Avatar alt={ username} src={profilePicture}/>
                  <TextField sx={{flexGrow:1, ml:2, bgcolor:"white"}}id="profile_picture" label="Picture URL" variant="outlined" value={profilePicture} required />
                </Box>
                <TextField id="bio" multiline label="Bio"variant="outlined" sx={{bgcolor:"white"}} value={bio}/>
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
