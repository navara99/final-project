import React from "react";
import FairListItem from "./FairListItem";
import { List } from "@mui/material";
import { Divider } from "@mui/material";

function FairsList({ fairs, isMember }) {

  const renderFairs = () => {
    return fairs.map((fair, i) => {
      return (
        <div key={i}>
          <FairListItem {...{ fair }} key={fair.id} {...{ isMember }} />
          {i === fairs.length - 1 ? "" : < Divider />}
        </div>
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