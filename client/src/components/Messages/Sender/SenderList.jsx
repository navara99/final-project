import React from "react";
import SenderListItem from "./SenderListItem";
import { List } from "@mui/material";

const SenderList = ({ senders, setReceiverId, handleOnClick, setReceiver }) => {
  const senderList = senders
    ? senders.map((sender) => (
        <SenderListItem
          key={sender.id}
          sender={sender}
          setReceiverId={setReceiverId}
          handleOnClick={handleOnClick}
          setReceiver={setReceiver}
        />
      ))
    : null;

  return <List>{senderList}</List>;
};

export default SenderList;
