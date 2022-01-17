import React, { useState } from 'react'
import SenderListItem from './SenderListItem'
import { List } from '@mui/material'
const SenderList = ({messages, currentUser,senders}) => {

  const senderList = senders ? senders.map(sender => <SenderListItem key={sender.id}sender = {sender}/>) : null

  return (
    <List>
      {senderList}
    </List>
  )
}

export default SenderList
