import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SenderList from './Sender/SenderList';
import MessageList from './Messages/MessageList';
import MessageForm from './MessageForm/MessageForm';
import {io} from 'socket.io-client'
import axios from 'axios';
const ChatBox = () => {
    // intialize socket
    const socket = io.connect("http://localhost:8080");
    const [messages, setMessages] = useState(null);
    const [sender, setSender] = useState(null);
    useEffect(() => {
        axios.get("/api/messages").then(res => {
            setMessages(res.data)
        })
    }, []);
    // useEffect(() => {
    //     if(messages) {
    //         messages
    //         axios.get("/api/users").then(res => {
    //             console.log("senders", res.data)
    //         })
    //     }
    // },[messages])
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
                  <SenderList />
                </ListItem>
            </List>      
        </Grid>
        {/* Chatter Box */}
        <Grid item xs ={9}  px={2} sx={{backgroundColor:"#eff2f6"}} component={Paper} variant='outlined'>
            <MessageList messages={messages} />
            <Divider />
            <MessageForm />
        </Grid>
    </Grid>
  );
}

export default ChatBox;


