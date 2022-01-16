import React from "react";
import { ListItem, ListItemText } from "@mui/material"

function JobListItem({ job }) {



  return (
    <>
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
    </>
  )

};

export default JobListItem;