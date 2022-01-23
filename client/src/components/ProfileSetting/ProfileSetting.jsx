import { Grid } from '@mui/material'
import React,{useState} from 'react'
import EditPassword from './EditPassword'
import EditProfile from './EditProfile'
import NavColumn from './NavColumn'

const ProfileSetting = ({setCurrentUser, currentUser, setErrorMessage, setShowError,setSnackBarDetails}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
 
  return (
    <Grid container justifyContent="flex-start" alignItems="stretch">
      <NavColumn selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>
      {selectedIndex === 0 && <EditProfile {...{setCurrentUser, currentUser, setErrorMessage, setShowError,setSnackBarDetails}}/>}
      {selectedIndex === 1 && <EditPassword {...{setCurrentUser, currentUser, setErrorMessage, setShowError,setSnackBarDetails}}/>}
    </Grid>
  )
}

export default ProfileSetting
