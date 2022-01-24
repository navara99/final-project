import { Grid, TextField, Typography, Avatar, Divider, Button } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FileUploadIcon from '@mui/icons-material/FileUpload';


const EditProfile = ({ setCurrentUser, currentUser, setErrorMessage, setShowError }) => {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    profilePicture: "",
    bio: ""
  });
  const [resume, setResume] = useState();
  useEffect(() => {
    if (currentUser) {
      const { first_name, last_name, email, username, profile_picture, bio } = currentUser;
      setUserInfo({
        firstName: first_name,
        lastName: last_name,
        email: email,
        username: username,
        profilePicture: profile_picture,
        bio: bio
      })
    }

  }, [currentUser]);

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateUserInfo = new FormData();
    updateUserInfo.append("firstName", userInfo.firstName);
    updateUserInfo.append("lastName", userInfo.lastName);
    updateUserInfo.append("email", userInfo.email);
    updateUserInfo.append("username", userInfo.username);
    updateUserInfo.append("profilePicture", userInfo.profilePicture);
    updateUserInfo.append("bio", userInfo.bio)
    resume && updateUserInfo.append("resume", resume);
    console.log("resume", resume)
    axios.post("/api/users/edit", updateUserInfo).then(res => {
      setCurrentUser(res.data)
      navigate("/profile")
    }).catch(error => {
      setErrorMessage(error.response.data.error);
      setShowError(true);
    })
  }
  return (
    <>
      {
        currentUser && (<Grid item container xs={9} sx={{ backgroundColor: "#eff2f6", pr: 4, pl: 6 }} >
          <Grid item container xs={12} direction="column" sx={{ height: "100%" }}>
            <Grid item sx={{ flexGrow: "auto", my: 3 }}>
              <Typography variant='h4'>Edit Profile</Typography>
            </Grid>
            <Grid item container component="form" direction="column" sx={{ flexGrow: 1 }} justifyContent="space-evenly" onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <TextField id="firstName" name="firstName" label="First name" variant="outlined" sx={{ flexGrow: 1, mr: 2, bgcolor: "white" }} value={userInfo.firstName} required onChange={handleChange} />
                <TextField id="lastName" name="lastName" label="Last name" variant="outlined" sx={{ flexGrow: 1, bgcolor: "white" }} value={userInfo.lastName} required onChange={handleChange} />
              </Box>
              <TextField id="email" name="email" label="Email" variant="outlined" sx={{ bgcolor: "white" }} value={userInfo.email} required onChange={handleChange} />
              <TextField id="userName" name="username" label="User name" variant="outlined" sx={{ bgcolor: "white" }} value={userInfo.username} required onChange={handleChange} />
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Avatar alt={userInfo.username} src={userInfo.profilePicture} />
                <TextField sx={{ flexGrow: 1, ml: 2, bgcolor: "white" }} id="profile_picture" name="profilePicture" label="Picture URL" variant="outlined" value={userInfo.profilePicture} onChange={handleChange} />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ width: '20%', mt: 2 }}
                  startIcon={<FileUploadIcon />}
                >Upload Resume<input
                    type="file"
                    onChange={(e) => setResume(e.target.files[0])}
                    name="resume"
                    hidden />
                </Button>
                <span style={{ paddingLeft: 10 }}>{resume && resume.name}</span>
              </Box>

              <TextField id="bio" name="bio" multiline label="Bio" variant="outlined" sx={{ bgcolor: "white", mt: 2 }} value={userInfo.bio} onChange={handleChange} />
              <Divider />
              <Grid item>
                <Button variant='contained' size='large' type="submit" color="success">Save</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>)

      }
    </>)
}

export default EditProfile
