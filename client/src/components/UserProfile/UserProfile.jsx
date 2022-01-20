import { Avatar, Grid, Stack, Typography, Box, Badge, Divider, ListItemText , List} from '@mui/material';
// import { styled } from '@mui/system';
import { styled } from '@mui/material/styles';
import React from 'react';

const ProfilePic = styled(Avatar)(({ theme }) => ({
  width:150, 
  height:150,
  border: `2px solid ${theme.palette.background.paper}`,

}));

const UserProfile = ({currentUser}) => {
  return ( <>{
    currentUser &&
    (
    <Grid xs={12} container sx={{backgroundColor:"#eff2f6"}} justifyContent="space-around">
      <Stack spacing={3} >
          <Box sx={{bgcolor:'#1f78b1'}}>
            <Badge
            sx={{bgcolor:'#1f78b1', width:700}}
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              badgeContent={
                <ProfilePic alt={currentUser.first_name} src={currentUser.profile_picture} />
              }
            >
            <Box component="span" sx={{height:150, width:500}}/>
            </Badge>
          </Box>
          <Box sx={{pt:6,px:3, display:'flex', alignItems:"end"}}>
            <Typography variant='h4' sx={{}}>{`${currentUser.first_name} ${currentUser.last_name}`}</Typography>
            <Typography variant='body1' sx={{alignSelf:"end", pl:1}}>{`( ${currentUser.username} )`}</Typography>
          </Box>
          <Box sx={{px:3}}>
            <Typography variant='h6'>About</Typography>
            <Typography variant='body1' sx={{pt:1}}>{currentUser.bio}</Typography>
          </Box>
      </Stack>
    </Grid>)
  }

  </>

  )
}

export default UserProfile


