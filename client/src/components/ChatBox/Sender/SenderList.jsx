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
    ? senders
        .map((sender) => {
          const [lastMsg, createdDate, lastUserId, msgId] = messages.reduce(
            (lastMessage, message) => {
              if (
                message.sender_id === sender.id ||
                message.receiver_id === sender.id
              ) {
                return [message.message, message.created_at, message.sender_id, message.id];
              }
              return lastMessage;
            },
            null
          );
          return { ...sender, lastMsg, createdDate, lastUserId, msgId };
        })
        .sort((senderA, senderB) => senderB.msgId - senderA.msgId)
        .map((sender) => {
          const { lastMsg, createdDate, lastUserId } = sender;
          return (
            <SenderListItem
              key={sender.id}
              sender={sender}
              setReceiverId={setReceiverId}
              handleOnClick={handleOnClick}
              setReceiver={setReceiver}
              {...{ lastMsg, createdDate, lastUserId }}
            />
          );
        })
    : null;

  return <List>{senderList}</List>;
};

export default SenderList;
