import React, { useState } from 'react'
import SenderListItem from './SenderListItem'
import { List } from '@mui/material'
const SenderList = ({messages, currentUser}) => {
  const senders = [
    {
      name : 'Remy Sharp',
      imageUrl : "https://pickaface.net/gallery/avatar/20120409_230759_3646_Fake.png",
      last_message: "I'll be in your neighborhood doing errands this…"
    },
    {
      name : 'Sandra Adams',
      imageUrl : "https://pickaface.net/gallery/avatar/29659976_190208_1931_x7bs7.png",
      last_message: "Do you have Paris recommendations"
    },
    {
      name : 'Scott Styris',
      imageUrl : "https://pickaface.net/gallery/avatar/unr_fake_190524_1549_9fgji7.png",
      last_message: "Wish I could come, but I'm out of town this"
    }
  ];


  const senderList = senders ? senders.map(sender => <SenderListItem key={sender.name}sender = {sender}/>) : null

  return (
    <List>
      {senderList}
    </List>
  )
}

export default SenderList
