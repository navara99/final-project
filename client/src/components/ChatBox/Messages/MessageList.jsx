import React, { useEffect, useRef } from "react";
import { List } from "@mui/material";
import MessageListItem from "./MessageListItem";
import axios from "axios";

const MessageList = (props) => {
  const { messages, receiverId, setMessages } = props;
  const myMessage = useRef(null);

  const messageList = messages
    ? messages.map((message, i) => (
        <MessageListItem key={i} {...{ ...props, message }} />
      ))
    : null;

  useEffect(() => {
    if (myMessage && myMessage.current) {
      myMessage.current.scrollTop = myMessage.current.scrollHeight;
    }
  }, [myMessage, messages]);

  useEffect(() => {
    if (receiverId) {
      axios.put(`/api/messages/read/${receiverId}`).then((res) => {
        setMessages((prev) =>
          prev.map((message) => {
            if (message.sender_id !== receiverId) return message;
            return { ...message, is_read: true };
          })
        );
      });
    }
  }, [receiverId, messages.length]);
  return <List ref={myMessage}>{messageList}</List>;
};

export default MessageList;
