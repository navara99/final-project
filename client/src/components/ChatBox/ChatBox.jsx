import React, { useEffect, useState, useRef} from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SenderList from './Sender/SenderList';
import MessageList from './Messages/MessageList';
import MessageForm from './MessageForm/MessageForm';
import {io} from 'socket.io-client';
import axios from 'axios';
import useMessageReceiver from '../../hooks/useMessageReceiver';
const ChatBox = ({currentUser}) => {
  const [messages, setMessages] = useState(null);
  const [senders, setSenders] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [receiverId, setReceiverId,handleOnClick] = useMessageReceiver(null)
  const socket = useRef();
  useEffect(() => {
    axios.get("/api/messages").then(res => {
      setMessages(res.data.messagesArr);
      setSenders(res.data.contacts)
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      sender_id: currentUser.id, 
      receiver_id: receiverId, 
      message: messageText
    }
    axios.post("/api/messages/", newMessage).then(res => {
      setMessages((prev) => [...prev, res.data])
    });
    //sending message to socket server
    socket.current.emit("sendMessage", newMessage);
    
    setMessageText('');
  }
    
  useEffect(() => { 
    // intialize socket
    socket.current = io.connect("http://localhost:8080");
    socket.current.on("getMessage", (data) => {
        console.log("data", data);
        setIncomingMessage({
          receiver_id : data.receiver_id,
          sender_id: data.sender_id,
          message: data.message,
          created_at: new Date().toISOString()
        });
      });
  },[]);

  useEffect(() => {
    incomingMessage &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage]);

  useEffect(() => {
      if(currentUser) {
        //sending user id
        socket.current.emit("addUser", currentUser.id)
      }
  },[currentUser])

  return (
    <Grid container >
        {/* List of user  */}
        <Grid item px={2} xs={3} component={Paper} variant='outlined' >
            <List >
                <ListItem>
                  <Typography variant='h5'>Message (12)</Typography>  
                </ListItem>
                <ListItem>
                  <SenderList messages={messages} currentUser={currentUser} senders = {senders} setReceiverId = {setReceiverId} handleOnClick = {handleOnClick} />
                </ListItem>
            </List>      
        </Grid>
        {/* Chatter Box */}
        <Grid item xs ={9}  px={2} sx={{backgroundColor:"#eff2f6"}} component={Paper} variant='outlined'>
            {
                receiverId && currentUser ? (
                    <>
                      <MessageList messages={messages.filter(message => (message.sender_id === receiverId && message.receiver_id === currentUser.id) || (message.sender_id === currentUser.id && message.receiver_id === receiverId))} currentUser={currentUser} />
                      <Divider />
                      <MessageForm messageText={messageText} handleSubmit={handleSubmit} setMessageText={setMessageText} />
                    </>
                ) : (
                    <>
                        <Typography variant='h3'> Open chat conversation</Typography>
                    </>
                )
            }
          
        </Grid>
    </Grid>
  );
}

export default ChatBox;


