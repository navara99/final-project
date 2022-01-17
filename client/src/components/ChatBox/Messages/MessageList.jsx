import React from 'react'
import { Grid, List } from '@mui/material'
import MessageListItem from './MessageListItem';

const MessageList = ({messages}) => {
  const messageList = messages ? messages.map(message => <MessageListItem key = {message.id}message = {message}/>) : null
  return (
    <List >
        {messageList}
    </List>
  )
}

export default MessageList
