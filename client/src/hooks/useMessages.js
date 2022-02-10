import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import moment from "moment";
import { DataArray } from "@mui/icons-material";

const useMessages = (currentUser) => {
  const [receiverId, setReceiverId] = useState();
  const [messages, setMessages] = useState([]);
  const [senders, setSenders] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [socket, setSocket] = useState();
  const [receiver, setReceiver] = useState();
  const location = useLocation();
  const [numOfUsers, setNumOfUsers] = useState({});

  useEffect(() => {
    if (currentUser) {
      axios.get("/api/messages").then(({ data }) => {
        setSenders(data.senders);
        setMessages(data.messages);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    const reverseMsg = [...messages].reverse();
    setSenders((prev) =>
      prev
        .map((sender) => {
          const numOfMsg = messages.filter(
            (message) => message.sender_id === sender.id && !message.is_read
          ).length;
          const { message, created_at, sender_id, id } = reverseMsg.find(
            (message) =>
              message.sender_id === sender.id ||
              message.receiver_id === sender.id
          );
          return {
            ...sender,
            lastMsg: message,
            createdDate: created_at,
            lastUserId: sender_id,
            msgId: id,
            numOfMsg,
          };
        })
        .sort((senderA, senderB) => senderB.msgId - senderA.msgId)
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
    if (!currentUser) return;
    const socket = io.connect("http://localhost:8080");
    socket.on("getMessage", (data) => {
      const newMsg = { ...data.message };
      setSenders((prev) => {
        if (
          prev.some((sender) => sender && sender.id === data.message.sender_id)
        ) {
          return prev;
        }
        return [data.sender, ...prev];
      });
      setMessages((prev) => [...prev, newMsg]);
    });

    socket.on("updateUsers", (data) => {
      setNumOfUsers(data);
    });

    socket.on("editMessage", (data) => {
      setNumOfUsers(data);
      console.log(data);
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
      created_at: moment(),
    };
    axios.post("/api/messages/", newMessage).then((res) => {
      setSenders((prev) => {
        if (prev.some((el) => el.id === res.data.receiver.id)) {
          return prev;
        }
        return [res.data.receiver, ...prev];
      });
      setMessages((prev) => [...prev, res.data.messageObj]);
      socket.emit("sendMessage", {
        message: res.data.messageObj,
        sender: currentUser,
      });
      setMessageText("");
    });
    //sending message to socket server
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

  const leaveStall = (fairId, stallId) => {
    if (socket) socket.emit("leave", { fairId, stallId });
  };

  const joinStall = (fairId, stallId) => {
    if (socket) socket.emit("join", { fairId, stallId });
  };

  const updateUsers = (fairId, stallId, num) => {
    if (socket) socket.emit("updateUsers", { fairId, stallId, num });
  };

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
    socket,
    setSenders,
    leaveStall,
    joinStall,
    numOfUsers,
    updateUsers
  };

  return messageState;
};

export default useMessages;
