import { Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
const NavColumn = ({selectedIndex, setSelectedIndex}) => {
  
  return (
    <Grid item xs ={3} >
      <List>
        <ListItem >
          <ListItemText primary="Settings" primaryTypographyProps={{variant:"h6"}}/>
        </ListItem>
        <Divider/>
        <ListItemButton selected={selectedIndex === 0} sx={selectedIndex === 0 ?{borderRight: '5px solid #2196f366' } : {}} onClick={(e) => setSelectedIndex(0)}>
          <ListItemIcon>
            <EditIcon/>
          </ListItemIcon>
          <ListItemText primary= "Edit Profile"/>
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 1}sx={selectedIndex === 1 ?{borderRight: '5px solid #2196f366' } : {}} onClick={(e) => setSelectedIndex(1)}>
          <ListItemIcon>
            <SecurityIcon/>
          </ListItemIcon>
          <ListItemText primary= "Password & Security"/>
        </ListItemButton>
      </List>
    </Grid>
  )
}

export default NavColumn
