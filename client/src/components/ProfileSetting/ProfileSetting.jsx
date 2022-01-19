import { Grid } from '@mui/material'
import React,{useState} from 'react'
import useCurrentUser from '../../hooks/useCurrentUser'
import EditPassword from './EditPassword'
import EditProfile from './EditProfile'
import NavColumn from './NavColumn'

const ProfileSetting = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {currentUser} = useCurrentUser();
  return (
    <Grid container justifyContent="flex-start" alignItems="stretch">
      <NavColumn selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>
      {selectedIndex === 0 && <EditProfile currentUser={currentUser}/>}
      {selectedIndex === 1 && <EditPassword/>}
    </Grid>
  )
}

export default ProfileSetting
