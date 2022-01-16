import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar,ListItemText, Typography, Divider, ListItemButton} from '@mui/material'

const SenderListItem = ({sender}) => {
  const {name, imageUrl, last_message} = sender;
  return (  
    <>
      <ListItemButton alignItems="flex-start">
          <ListItemAvatar>
          <Avatar alt={name} src={imageUrl} />
          </ListItemAvatar>
          <ListItemText
          primary={name}
          secondary={
              <>
              <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
              >
                {last_message}
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
