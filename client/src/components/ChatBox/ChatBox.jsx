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
import { Box } from '@mui/material';
import {io} from 'socket.io-client';
import axios from 'axios';
import useMessageReceiver from '../../hooks/useMessageReceiver';
import { Avatar, ListItemAvatar } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ChatBox = ({currentUser}) => {
  const [messages, setMessages] = useState(null);
  const [senders, setSenders] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [receiverId, setReceiverId,handleOnClick] = useMessageReceiver(null)
  const [ socket , setSocket] = useState(null)
  const location = useLocation();
  const {contactId, contactFirstName, contactLastName, contactProfilePicture} = location.state;
 
  useEffect(() => {
    axios.get("/api/messages").then(res => {
      setMessages(res.data.messagesArr);
      setSenders(res.data.contacts)
    })
  }, []);

  useEffect(() => {
    if(contactId){
        setReceiverId(contactId)
    }
  },[contactId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      sender_id: currentUser.id, 
      receiver_id: receiverId, 
      message: messageText
    }
    axios.post("/api/messages/", newMessage).then(res => {
      console.log("data", res);
      setMessages((prev) => [...prev, res.data.messageObj]);
      setSenders((prev) => {
          if(prev.some(el => el.id === res.data.receiver.id)) {
              return prev;
          }
          return [...prev, res.data.receiver];
      })
    });
    //sending message to socket server
    socket.emit("sendMessage", newMessage);
    setMessageText('');
  }
    
  useEffect(() => { 
    // intialize socket
    const socket = io.connect("http://localhost:8080");
    socket.on("getMessage", (data) => {
        console.log("data", data);
        setIncomingMessage({
          receiver_id : data.receiver_id,
          sender_id: data.sender_id,
          message: data.message,
          created_at: new Date().toISOString()
        });
      });
    //   console.log("Intializing socket")
      setSocket(socket);
  },[]);

  useEffect(() => {
    incomingMessage &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage]);

  useEffect(() => {
      if(currentUser && socket) {
        //sending user id
        socket.emit("addUser", currentUser.id);
      }
  },[currentUser,socket])

  return (
    <Grid container >
        {/* List of user  */}
        <Grid item px={2} xs={3} component={Paper} variant='outlined' >
            <List >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt ={currentUser && currentUser.username} src={currentUser && currentUser.profile_picture} />
                    </ListItemAvatar>
                    {/* <ListItemText primary={currentUser && currentUser.first_name}>
                    </ListItemText>
                    <ListItemText secondary="You">
                    </ListItemText> */}
                  <Typography variant='h4'>{currentUser && currentUser.first_name}</Typography>
                  
                </ListItem>
                <Divider/>
                <ListItem>
                  <SenderList messages={messages} currentUser={currentUser} senders = {senders} setReceiverId = {setReceiverId} handleOnClick = {handleOnClick} />
                </ListItem>
            </List>      
        </Grid>
        {/* Chatter Box */}
        <Grid item xs ={9}   sx={{backgroundColor:"#eff2f6"}} component={Paper} variant='outlined'>
            {
                receiverId && currentUser ? (
                    <>
                      <Box sx={{width:'100%', height:"50px", backgroundColor:"#bdc7df", display:"flex", justifyContent:"center", alignItems:"center"}} >
                          <Avatar alt={`${contactFirstName}`} src={`${contactProfilePicture}`}/>
                          <Typography variant='body2'sx={{ml:2}}>{contactFirstName} {contactLastName}</Typography>
                      </Box>
                      <MessageList messages={messages && messages.filter(message => (message.sender_id === receiverId && message.receiver_id === currentUser.id) || (message.sender_id === currentUser.id && message.receiver_id === receiverId))} currentUser={currentUser} px={2}/>
                      <Divider />
                      <MessageForm messageText={messageText} handleSubmit={handleSubmit} setMessageText={setMessageText} px={2}/>
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


