import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material"

function JobsList({ jobs }) {

  console.log(jobs);
  const job = jobs[0]

  return (
    <List>
      <ListItem>
        <ListItemText
          primary={job.name}
          secondary={
          <>
          <p>Location: {job.location}</p>
          <p>{job.description}</p>
          </>}
        />
      </ListItem>
      <Divider/>
    </List>
  )

}

export default JobsList;