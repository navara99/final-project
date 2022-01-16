import React from "react";
import { ListItem, ListItemText } from "@mui/material"
import JobActions from "./JobActions";

function JobListItem({ job, isMember }) {

  return (
    <>
      <ListItem>
        <div>
          <ListItemText
            primary={job.name}
            secondary={
              <>
                <p>Location: {job.location}</p>
                <p>{job.description}</p>
              </>}
          />
          <JobActions {...{ isMember }} {...{ job }} />
        </div>
      </ListItem>
    </>
  )

};

export default JobListItem;