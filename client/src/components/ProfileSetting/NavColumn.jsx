import { Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
const NavColumn = () => {
  const [ selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Grid item xs ={3} >
      <List>
        <ListItem >
          <ListItemText primary="Settings" primaryTypographyProps={{variant:"h6"}}/>
        </ListItem>
        <Divider/>
        <ListItemButton selected={selectedIndex === 0} onClick={(e) => setSelectedIndex(0)}>
          <ListItemIcon>
            <EditIcon/>
          </ListItemIcon>
          <ListItemText primary= "Edit Profile"/>
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 1} onClick={(e) => setSelectedIndex(1)}>
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
