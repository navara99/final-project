import React from "react";
import FairListItem from "./FairListItem";
import { List } from "@mui/material";
import { Divider } from "@mui/material";

function FairsList({ fairs, isMember }) {

  const renderFairs = () => {
    return fairs.map((fair, i) => {
      return (
        <>
          <FairListItem {...{ fair }} key={fair.id} {...{ isMember }} />
          {i === fairs.length - 1 ? "" : < Divider />}
        </>
      )
    });
  };

  return (
    <List>
      {renderFairs()}
    </List>
  )
}

export default FairsList;