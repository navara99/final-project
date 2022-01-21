import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import useCurrentUser from "./useCurrentUser";
import moment from "moment";

const useMessages = () => {
  const [receiverId, setReceiverId] = useState(null);
  const [messages, setMessages] = useState(null);
  const [senders, setSenders] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const location = useLocation();
  const { currentUser, setCurrentUser, logout } = useCurrentUser();

  useEffect(() => {
    axios.get("/api/messages").then((res) => {
      setSenders(res.data.contacts);
      setMessages(res.data.messagesArr);
    });
  }, []);

  useEffect(() => {
    setSenders((prev) =>
      prev
        ? prev
            .map((sender) => {
              const numOfMsg = messages.filter(
                (message) => message.sender_id === sender.id && !message.is_read
              ).length;
              const [lastMsg, createdDate, lastUserId, msgId] = messages.reduce(
                (lastMessage, message) => {
                  if (
                    message.sender_id === sender.id ||
                    message.receiver_id === sender.id
                  ) {
                    return [
                      message.message,
                      message.created_at,
                      message.sender_id,
                      message.id,
                    ];
                  }
                  return lastMessage;
                },
                null
              );
              return {
                ...sender,
                lastMsg,
                createdDate: moment(`${createdDate}`).fromNow(),
                lastUserId,
                msgId,
                numOfMsg,
              };
            })
            .sort((senderA, senderB) => senderB.msgId - senderA.msgId)
        : prev
    );
  }, [messages]);

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
      setIncomingMessage({ ...data, created_at: new Date().toISOString() });
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

  const numOfUnreadMsg = Array.isArray(messages)
    ? messages.filter(
        ({ is_read, receiver_id }) => !is_read && receiver_id === currentUser.id
      ).length
    : 0;

  const messageState = {
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
    numOfUnreadMsg,
    setMessages,
    setSenders,
    socket,
  };

  return { currentUser, setCurrentUser, logout, messageState };
};

export default useMessages;
