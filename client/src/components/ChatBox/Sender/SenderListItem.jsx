import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar,ListItemText, Typography, Divider, ListItemButton} from '@mui/material'

const SenderListItem = ({sender, setReceiverId}) => {
  const {first_name, last_name, profile_picture, username, id} = sender;
  return (  
    <>
      <ListItemButton alignItems="flex-start" onClick={(e) => setReceiverId(id)}>
          <ListItemAvatar>
          <Avatar alt={first_name} src={profile_picture} />
          </ListItemAvatar>
          <ListItemText
          primary={first_name + last_name}
          secondary={
              <>
              <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
              >
                {username}
              </Typography>
             
              </>
          }
          />
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
    )
}

export default SenderListItem
