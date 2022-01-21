import React from "react";
import { List } from "@mui/material";
import MessageListItem from "./MessageListItem";

const MessageList = (props) => {
  const { messages } = props;
  const messageList = messages
    ? messages.map((message, i) => <MessageListItem key={i} {...props, message} />)
    : null;
  return <List>{messageList}</List>;
};

export default MessageList;
