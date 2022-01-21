import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";

const useMessages = (currentUser) => {
  const [receiverId, setReceiverId] = useState(null);
  const [messages, setMessages] = useState(null);
  const [senders, setSenders] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios.get("/api/messages").then((res) => {
      setMessages(res.data.messagesArr);
      setSenders(res.data.contacts);
    });
  }, []);

  useEffect(() => {
    if (location.state) {
      const {
        contactId,
        contactFirstName,
        contactLastName,
        contactProfilePicture,
      } = location.state;
      setReceiverId(contactId);
      setReceiver({
        id: contactId,
        first_name: contactFirstName,
        last_name: contactLastName,
        profile_picture: contactProfilePicture,
      });
    }
  }, [location.state]);

  useEffect(() => {
    // intialize socket
    const socket = io.connect("http://localhost:8080");
    socket.on("getMessage", (data) => {
      setIncomingMessage({
        receiver_id: data.receiver_id,
        sender_id: data.sender_id,
        message: data.message,
        created_at: new Date().toISOString(),
      });
    });
    setSocket(socket);
  }, []);

  useEffect(() => {
    incomingMessage && setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage]);

  useEffect(() => {
    if (currentUser && socket) {
      //sending user id
      socket.emit("addUser", currentUser.id);
    }
  }, [currentUser, socket]);

  const handleSubmit = (e, message = messageText) => {
    e.preventDefault();
    const newMessage = {
      sender_id: currentUser.id,
      receiver_id: receiverId,
      message,
    };
    axios.post("/api/messages/", newMessage).then((res) => {
      setMessages((prev) => [...prev, res.data.messageObj]);
      setSenders((prev) => {
        if (prev.some((el) => el.id === res.data.receiver.id)) {
          return prev;
        }
        return [...prev, res.data.receiver];
      });
    });
    //sending message to socket server
    socket.emit("sendMessage", newMessage);
    setMessageText("");
  };

  const handleOnClick = (e) => {
    setReceiverId(e.target.value);
  };

  return {
    setMessageText,
    messageText,
    receiverId,
    receiver,
    handleOnClick,
    setReceiver,
    handleSubmit,
    messages,
    senders,
    setReceiverId,
  };
};

export default useMessages;
