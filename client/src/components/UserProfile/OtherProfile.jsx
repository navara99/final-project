import { Avatar, Grid, Stack, Typography, Box, Badge, Divider, ListItemText , List, ListItemAvatar, ListItem, Dialog,DialogActions,DialogContent, Button, DialogTitle} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useOtherUserProfile from '../../hooks/useOtherUserProfile';

const ProfilePic = styled(Avatar)(({ theme }) => ({
  width:150, 
  height:150,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const OtherProfile = ({currentUser}) => {
  const {user_id} = useParams();
  // const {myGroups} = useMyGroups();
  const [otherUser, setOtherUser] = useOtherUserProfile(user_id)
  const [openResume, setOpenResume] = useState(false);
  console.log("otherUser", otherUser);
  
  return ( <>{
   otherUser &&
    (
    <Grid item xs={12} container sx={{backgroundColor:"#eff2f6"}} justifyContent="space-around">
      <Stack spacing={2} >
          <Box sx={{bgcolor:'#1f78b1'}}>
            <Badge
            sx={{bgcolor:'#1f78b1', width:700}}
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              badgeContent={
                <ProfilePic alt={other.first_name} src={otherUser.profile_picture} />
              }
            >
            <Box component="span" sx={{height:150, width:500}}/>
            </Badge>
          </Box>
          <Box sx={{pt:6,px:3,display:"flex", justifyContent:"space-between"}}>
            <Box sx={{ display:'flex'}}>
              <Typography variant='h4' sx={{}}>{`${otherUser.first_name} ${otherUser.last_name}`}</Typography>
              <Typography variant='body1' sx={{ pl:1, pt:1.5}}>{`( ${otherUser.username} )`}</Typography>
            </Box>
            <Box sx={{mr:8, pr:3, display:'flex'}}>
              {otherUser.user_organizations && otherUser.user_organizations.length > 0 ? (
                <List>
                  { otherUser.user_organizations.map((group,i) => (
                        <ListItem key={i}>
                          <ListItemAvatar >
                            <Avatar alt={`${group.name}`} src='https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1'></Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={`${group.name}`} primaryTypographyProps={{variant:"h6"}}
                          />
                        </ListItem>))
                  }
                </List>): <Typography variant='body1' sx={{ pl:1, pt:1.5}}>Not associated with any organization</Typography>}
            </Box>
          </Box>
          <Box sx={{px:3}}>
            <Button onClick={(e) => setOpenResume(true)} variant='contained'>Your Resume</Button>
          </Box>
          <Box>
            <Dialog open={openResume} fullWidth={true} maxWidth={"lg"} onClose={() => { }} sx={{height:"100vh"}} scroll='body' >
              <DialogContent sx={{height:"70vh"}}>
                {!currentUser.resume ? (<Typography variant='h6' p={2}> You haven't uploaded your resume. Go to settings and upload new resume</Typography>) : (<embed src={"http://localhost:8080/" + currentUser.resume + "#toolbar=0"} height="100%" width="100%" />)}
              </DialogContent>
              <DialogActions>
                <Button onClick={() => { setOpenResume(!openResume) }}>Close</Button>
              </DialogActions>
            </Dialog>
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

export default OtherProfile;


