import { Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Columns({ selectedIndex, setSelectedIndex }) {

  

  return (
    <Grid item xs={3} >
      <List>
        <ListItem >
          <ListItemText primary="Jobs" primaryTypographyProps={{ variant: "h6" }} />
        </ListItem>
        <Divider />
        <ListItemButton selected={selectedIndex === 0} sx={selectedIndex === 0 ? { borderRight: '5px solid #2196f366' } : {}} onClick={(e) => setSelectedIndex(0)}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favourite" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 1} sx={selectedIndex === 1 ? { borderRight: '5px solid #2196f366' } : {}} onClick={(e) => setSelectedIndex(1)}>
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="Applied" />
        </ListItemButton>
      </List>
    </Grid>
  )
};

export default Columns;