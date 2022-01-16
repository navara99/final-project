import React from 'react'
import { Grid, List } from '@mui/material'
import MessageListItem from './MessageListItem';

const MessageList = () => {
  const messages = [ 
    {
      text:"Hey man, What's up ?",
      created_at : "09:30",
      sender_id:1
    },
    {
      text:"Hey, Iam Good! What about you ?",
      created_at : "09:31",
      sender_id:2
    },
    {
      text:"Cool. i am good, let's catch up!",
      created_at : "10:30",
      sender_id:1
    },
    {
      text:"I am here!",
      created_at : "12:30",
      sender_id:1
    },
    {
      text:"I will be there in 5 mins",
      created_at : "12:31",
      sender_id:2
    }
  ];

  const messageList = messages ? messages.map(message => <MessageListItem message = {message}/>) : null
  return (
    <List >
        {messageList}
    </List>
  )
}

export default MessageList
