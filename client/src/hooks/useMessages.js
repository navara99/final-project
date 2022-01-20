import React, { useEffect } from "react";
import axios from "axios";

const useMessages = () => {
  const [messages, setMessages] = useState(null);
  const [senders, setSenders] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [receiverId, setReceiverId, handleOnClick] = useMessageReceiver(null);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      sender_id: currentUser.id,
      receiver_id: receiverId,
      message: messageText,
    };
    axios.post("/api/messages/", newMessage).then((res) => {
      console.log("data", res);
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

  useEffect(() => {
    // intialize socket
    const socket = io.connect("http://localhost:8080");
    socket.on("getMessage", (data) => {
      console.log("data", data);
      setIncomingMessage({
        receiver_id: data.receiver_id,
        sender_id: data.sender_id,
        message: data.message,
        created_at: new Date().toISOString(),
      });
    });
    //   console.log("Intializing socket")
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

  return {};
};

export default useMessages;