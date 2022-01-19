import { Grid } from '@mui/material'
import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import EditPassword from './EditPassword'
import EditProfile from './EditProfile'
import NavColumn from './NavColumn'

const ProfileSetting = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Grid container justifyContent="flex-start" alignItems="stretch">
      <NavColumn selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>
      <EditProfile/>
      <EditPassword/>
      <Outlet/>
    </Grid>
  )
}

export default ProfileSetting
