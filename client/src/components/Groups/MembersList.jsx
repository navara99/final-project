import React from "react";
import MembersListItem from "./MemberListItem";
import { List } from "@mui/material";

function MembersList({ members }) {

  const generateMembers = () => {

    return members.map((member) => {
      return <MembersListItem key={member.id} {...{ member }} />
    });

  };

  return (
    <List>
      {generateMembers()}
    </List >
  )

}

export default MembersList;