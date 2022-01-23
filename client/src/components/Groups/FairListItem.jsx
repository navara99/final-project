import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { formatStartEndTime, formatDate } from "../../helpers/date";
import FairsAction from "./FairsActions";

function FairListItem({ fair, isMember }) {

  // secondary={jobDescription.split("\n").map((elem, i) => <span className="job-info" key={i} style={{ display: "block" }}>{elem}</span>)}

  //   const jobDescription = `
  // ${job.description} \n 
  // Location: ${job.location} \n 
  // Experience: ${job.experience} \n 
  // Expected Salary: ${job.salary} \n
  // Posted: ${formatDate(job.created_at)}
  //`

  const fairDescription = `
    Description: ${fair.description} \n
    Date: ${formatDate(fair.start_time)} \n
    Time: ${formatStartEndTime(fair.start_time, fair.end_time)} \n
  `
  return (
    <ListItem>
      <div>
        <img src={fair.poster} style={{ width: 250, height: 150 }} alt={fair.name}>
        </img>
        <ListItemText
          primary={fair.name}
          secondary={fairDescription.split("\n").map((elem, i) => <span className="job-info" key={i} style={{ display: "block" }}>{elem}</span>)}
        />
        <FairsAction id={fair.id} {...{ isMember }} />
      </div>
    </ListItem>
  )
}

export default FairListItem;