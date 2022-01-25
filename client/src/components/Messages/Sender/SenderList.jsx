import React from "react";
import SenderListItem from "./SenderListItem";
import { List } from "@mui/material";

const SenderList = ({
  messages,
  senders,
  setReceiverId,
  handleOnClick,
  setReceiver,
}) => {
  const senderList = senders
    ? senders.map((sender) => {
        const { lastMsg, createdDate, lastUserId, numOfMsg } = sender;
        return (
          <SenderListItem
            key={sender.id}
            sender={sender}
            setReceiverId={setReceiverId}
            handleOnClick={handleOnClick}
            setReceiver={setReceiver}
            {...{ lastMsg, createdDate, lastUserId, numOfMsg }}
          />
        );
      })
    : null;

  return <List>{senderList}</List>;
};

export default SenderList;
