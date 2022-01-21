import React from "react";
import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  ListItemButton,
} from "@mui/material";

const SenderListItem = ({
  sender,
  setReceiverId,
  setReceiver,
  lastMsg,
  createdDate,
  lastUserId,
}) => {
  const { first_name, last_name, profile_picture, username, id } = sender;
  const handleClick = (e) => {
    setReceiverId(id);
    setReceiver({ ...sender });
  };

  console.log(lastMsg, createdDate, lastUserId);
  return (
    <>
      <ListItemButton alignItems="flex-start" onClick={handleClick}>
        <ListItemAvatar>
          <Avatar alt={first_name} src={profile_picture} />
        </ListItemAvatar>
        <ListItemText
          primary={`${first_name} ${last_name}`}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
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
  );
};

export default SenderListItem;
