import React, { useEffect } from "react";
import { List } from "@mui/material";
import MessageListItem from "./MessageListItem";

const MessageList = (props) => {
  const { messages, receiverId, setMessages } = props;
  const messageList = messages
    ? messages.map((message, i) => (
        <MessageListItem key={i} {...{ ...props, message }} />
      ))
    : null;
  useEffect(() => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.sender_id !== receiverId) return message;
        return { ...message, is_read: true };
      })
    );
  }, [receiverId, messages.length]);
  return <List>{messageList}</List>;
};

export default MessageList;
