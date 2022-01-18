import React from "react";
import { ListItem, Avatar, ListItemAvatar, ListItemText, IconButton, Typography } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import useCurrentUser from "../../hooks/useCurrentUser";
import { Link } from "react-router-dom";

function MembersListItem({ member }) {
  const {currentUser} = useCurrentUser();
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="Travis Howard" src={`${member.profile_picture}`} />
      </ListItemAvatar>
      <ListItemText
        primary={`${member.first_name} ${member.last_name} ${currentUser && currentUser.id === member.id ? '  ( You )' : ''}`}
        secondary={
          <>
            <Typography component="span" variant="body2" sx={{display:"block",my:1}}>Username: @{member.username}</Typography>
            <Typography component="span" variant="body2" sx={{display:"block", my:1}}>Email: {member.email}</Typography>
          </>}
      />
      { currentUser && currentUser.id !== member.id && (
        <Link to="/messages" state = {{contactId : member.id, contactFirstName : member.first_name, contactLastName : member.last_name, contactProfilePicture : member.profile_picture}}>
          <IconButton color="primary" component="span" edge="start">
            <MessageIcon />
          </IconButton>
        </Link>
      )}
    </ListItem>
  )

};

export default MembersListItem;