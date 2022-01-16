import React from "react";
import MembersListItem from "./MemberListItem";
import { List } from "@mui/material";

function MembersList({ members }) {

  const generateMembers = () => {

    return members.map((member) => {
      return <MembersListItem {...{ member }} />
    });

  };

  return (
    <List>
      {generateMembers()}
    </List >
  )

}

export default MembersList;