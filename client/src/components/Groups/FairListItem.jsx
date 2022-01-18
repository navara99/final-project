import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { formatStartEndTime, formatDate } from "../../helpers/date";
import FairsAction from "./FairsActions";

function FairListItem({ fair, isMember }) {



  return (
    <ListItem>
      <div>
        <img src={fair.poster} style={{ width: 250, height: 150 }} alt={fair.name}>
        </img>
        <ListItemText
          primary={fair.name}
          secondary={
            <>
              <p>Description: {fair.description}</p>
              <p>Date: {formatDate(fair.start_time)}</p>
              <p>Time: {formatStartEndTime(fair.start_time, fair.end_time)}</p>
            </>}
        />
        <FairsAction id={fair.id} {...{ isMember }} />
      </div>
    </ListItem>
  )
}

export default FairListItem;