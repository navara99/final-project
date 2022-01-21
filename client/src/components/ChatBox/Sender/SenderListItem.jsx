import React from "react";
import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  ListItemButton,
} from "@mui/material";
import Badge from "@mui/material/Badge";

const SenderListItem = ({
  sender,
  setReceiverId,
  setReceiver,
  lastMsg,
  createdDate,
  lastUserId,
  numOfMsg,
}) => {
  const { first_name, last_name, profile_picture, username, id } = sender;
  const handleClick = (e) => {
    setReceiverId(id);
    setReceiver({ ...sender });
  };

  const msgName = sender.id === lastUserId ? sender.first_name : "Me";

  console.log(numOfMsg);
  return (
    <>
      <Badge
        badgeContent={numOfMsg}
        color="warning"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
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
                  {`${msgName}: ${lastMsg} (${createdDate})`}
                </Typography>
              </>
            }
          />
        </ListItemButton>
      </Badge>

      <Divider variant="inset" component="li" />
    </>
  );
};

export default SenderListItem;
