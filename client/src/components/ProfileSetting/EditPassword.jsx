import React, {useState}from 'react'
import { Grid, TextField, Typography, Divider, Button } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditPassword = ({setCurrentUser, currentUser, setErrorMessage, setShowError,setSnackBarDetails}) => {
  let navigate = useNavigate();
  const[currentPassword, setCurrentPassword] = useState("");
  const[newPassword, setNewPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(newPassword !== confirmPassword) {
      setErrorMessage("Password doesn't match");
      setShowError(true);
    }else {
      const passwordData = {
        currentPassword,
        newPassword,
        confirmPassword
      }
      axios.post("/api/users/password",passwordData)
           .then(res => {
              setSnackBarDetails({open:true, message:"Your password has been updated"})
              navigate("/profile")
           })
           .catch(error => {
            setErrorMessage(error.response.data.error);
            setShowError(true);
           })
    }
 

  }
  return (
    (
      <Grid item container xs={9} sx={{backgroundColor:"#eff2f6", pr:4, pl:6}} >
            <Grid item container  xs={12} direction="column" sx={{height:"100%"}}>
              <Grid item sx={{flexGrow: "auto", my:3}}>
                <Typography variant='h4'>Password & Security</Typography>
              </Grid>
              <Grid item container component="form" direction="column" sx={{flexGrow: 1}} justifyContent="space-evenly" onSubmit={handleSubmit}>

                <TextField id="currentPassword" value={currentPassword}label="Current Password" variant="outlined" sx={{bgcolor:"white"} } required onChange={(e) => setCurrentPassword(e.target.value)}/>
                <TextField id="newPassword" value={newPassword} label="New Password" variant="outlined" sx={{bgcolor:"white"}} required onChange={(e) => setNewPassword(e.target.value)}/>
                <TextField id="confirmPassword" value={confirmPassword} label="Confirm Password "variant="outlined" sx={{bgcolor:"white"}} required onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Divider/>
                <Grid item>
                  <Button variant='contained'size='large' type="submit">Save</Button>
                  {/* <Button variant='contained' size='small' sx={{height:30}}>Cancel</Button> */}
                </Grid>
              </Grid>
            </Grid>
      </Grid>
    )
  )
}

export default EditPassword
