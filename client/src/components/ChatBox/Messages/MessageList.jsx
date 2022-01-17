import React from 'react'
import { List } from '@mui/material'
import MessageListItem from './MessageListItem';

const MessageList = ({messages, currentUser}) => {
  const messageList = messages ? messages.map((message,i) => <MessageListItem key = {i} message = {message} currentUser={currentUser}/>) : null
  return (
    <List >
        {messageList}
    </List>
  )
}

export default MessageList
