import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { formatDate } from "../../helpers/date";
import FairsAction from "./FairsActions";

function FairListItem({ fair, isMember }) {



  return (
    <ListItem>
      <div>
        <img src={fair.poster} style={{ width: "15%", height: 150 }}>
        </img>
        <ListItemText
          primary={fair.name}
          secondary={
            <>
              <p>Description: {fair.description}</p>
              <p>Date: {formatDate(fair.start_time)}</p>
              <p>Start Time: {new Date(fair.start_time).toTimeString()}</p>
              <p>End Time: {new Date(fair.end_time).toTimeString()}</p>
            </>}
        />
        <FairsAction id={fair.id} {...{ isMember }} />
      </div>
    </ListItem>
  )
}

export default FairListItem;