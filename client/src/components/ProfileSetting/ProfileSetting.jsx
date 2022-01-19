import { Grid } from '@mui/material'
import React from 'react'
import EditPassword from './EditPassword'
import EditProfile from './EditProfile'
import NavColumn from './NavColumn'

const ProfileSetting = () => {
  return (
    <Grid container justifyContent="flex-start" alignItems="stretch">
      <NavColumn/>
      <EditProfile/>
      {/* <EditPassword/> */}
    </Grid>
  )
}

export default ProfileSetting
