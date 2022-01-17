import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SenderList from './Sender/SenderList';
import MessageList from './Messages/MessageList';
import MessageForm from './MessageForm/MessageForm';
import {io} from 'socket.io-client'
import axios from 'axios';
const ChatBox = ({currentUser}) => {
  // intialize socket
  const socket = io.connect("http://localhost:8080");
  const [messages, setMessages] = useState(null);
  const [sender, setSender] = useState(null);
  const [messageText, setMessageText] = useState('');
  useEffect(() => {
    axios.get("/api/messages").then(res => {
      setMessages(res.data)
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      sender_id: currentUser.id, 
      receiver_id: 2, 
      message: messageText
    }
    console.log("new", newMessage);
    axios.post("/api/messages/", newMessage).then(res => {
        
    })
      
    setMessageText('');
  }
    
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connection made with socket", socket.id)
    })
  },[])
  return (
    <Grid container >
        {/* List of user  */}
        <Grid item px={2} xs={3} component={Paper} variant='outlined' >
            <List >
                <ListItem>
                  <Typography variant='h5'>Message (12)</Typography>  
                </ListItem>
                <ListItem>
                  <SenderList messages={messages} currentUser={currentUser}/>
                </ListItem>
            </List>      
        </Grid>
        {/* Chatter Box */}
        <Grid item xs ={9}  px={2} sx={{backgroundColor:"#eff2f6"}} component={Paper} variant='outlined'>
            <MessageList messages={messages} currentUser={currentUser} />
            <Divider />
            <MessageForm messageText={messageText} handleSubmit={handleSubmit} setMessageText={setMessageText} />
        </Grid>
    </Grid>
  );
}

export default ChatBox;


