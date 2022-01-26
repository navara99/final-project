import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import moment from "moment";

const useMessages = (currentUser) => {
  const [receiverId, setReceiverId] = useState();
  const [messages, setMessages] = useState([]);
  const [senders, setSenders] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [socket, setSocket] = useState();
  const [receiver, setReceiver] = useState();
  const location = useLocation();

  useEffect(() => {
    axios.get("/api/messages").then((res) => {
      setMessages(res.data.messagesArr);
      setSenders(
        res.data.contacts.map((sender) => {
          const { createdDate } = sender;
          const timeAgo = moment(`${createdDate}`).fromNow();
          return { ...sender, createdDate: timeAgo };
        })
      );
    });
  }, [currentUser]);

  // useEffect(() => {
  //   if (Array.isArray(messages) && Array.isArray(senders)) setSenders((prev) =>
  //     prev
  //       .map((sender) => {
  //         const numOfMsg = messages.filter(
  //           (message) => message.sender_id === sender.id && !message.is_read
  //         ).length;
  //         const [lastMsg, createdDate, lastUserId, msgId] = messages.reduce(
  //           (lastMessage, message) => {
  //             if (
  //               message.sender_id === sender.id ||
  //               message.receiver_id === sender.id
  //             ) {
  //               return [
  //                 message.message,
  //                 message.created_at,
  //                 message.sender_id,
  //                 message.id,
  //               ];
  //             }
  //             return lastMessage;
  //           },
  //           null
  //         );
  //         return {
  //           ...sender,
  //           lastMsg,
  //           createdDate: moment(`${createdDate}`).fromNow(),
  //           lastUserId,
  //           msgId,
  //           numOfMsg,
  //         };
  //       })
  //       .sort((senderA, senderB) => senderB.msgId - senderA.msgId)
  //   );
  // }, [messages]);

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
    if (!currentUser) return;
    const socket = io.connect("http://localhost:8080");
    socket.on("getMessage", (data) => {
      console.log(data);
      const newMsg = { ...data, created_at: new Date().toISOString() };
      const senderInfo = {
        lastMsg: newMsg.message,
        createdDate: moment(`${newMsg.created_at}`).fromNow(),
        lastUserId: newMsg.sender_id,
        msgId: newMsg.id,
      };

      setSenders((prev) => {
        if (prev.some((sender) => sender.id === data.sender_id)) {
          return prev.map((sender) => {
            if (sender.id === data.sender_id) {
              return {
                ...sender,
                ...senderInfo,
                numOfMsg: sender.numOfMsg + 1,
              };
            }
            return sender;
          });
        }
        console.log(data.sender)
        return [{ ...data.sender, ...senderInfo, numOfMsg: 1 }, ...prev];
      });
      setMessages((prev) => [...prev, newMsg]);
    });

    socket.on("editMessage", (data) => {
      setMessages((prev) =>
        prev.map((msg) => {
          if (msg.id !== data.id) return msg;
          return data;
        })
      );
    });
    setSocket(socket);

    return socket.emit("logout");
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && socket) {
      //sending user id
      socket.emit("addUser", currentUser.id);
    }
  }, [currentUser, socket]);

  const handleSubmit = (e, message = messageText) => {
    if (!currentUser) return;
    e.preventDefault();
    const newMessage = {
      sender_id: currentUser.id,
      receiver_id: receiverId,
      message,
      sender: currentUser,
    };

    axios.post("/api/messages/", newMessage).then((res) => {
      const senderInfo = {
        lastMsg: newMessage.message,
        createdDate: moment(`${res.data.messageObj.created_at}`).fromNow(),
        lastUserId: res.data.messageObj.sender_id,
        msgId: res.data.messageObj.id,
      };

      setSenders((prev) => {
        if (prev.some((el) => el.id === res.data.receiver.id)) {
          return prev.map((sender) => {
            if (sender.id === res.data.receiver.id) {
              return { ...sender, ...senderInfo };
            }
            return sender;
          });
        }
        return [{ ...res.data.receiver, ...senderInfo, numOfMsg: 0 }, ...prev];
      });
      setMessages((prev) => [...prev, res.data.messageObj]);
    });
    //sending message to socket server
    socket.emit("sendMessage", newMessage);
    setMessageText("");
  };

  const handleOnClick = (e) => {
    setReceiverId(e.target.value);
  };

  const numOfUnreadMsg =
    Array.isArray(messages) && currentUser
      ? messages.filter(
          ({ is_read, receiver_id }) =>
            !is_read && receiver_id === currentUser.id
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

  return messageState;
};

export default useMessages;
