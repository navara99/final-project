import React from "react";
import { ListItem, ListItemText } from "@mui/material"
import JobActions from "./JobActions";
import TimeAgo from "timeago-react";

function JobListItem({ job, isMember }) {

  return (
    <>
      <ListItem>
        <div>
          <ListItemText
            primary={job.title}
            secondary={
              <>
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <p>Experience: {job.experience}</p>
                <p>Expected Salary: {job.salary}</p>
                <p>Posted: <TimeAgo
                  datetime={job.created_at}
                  locale='vi'
                /></p>
              </>}
          />
          <JobActions {...{ isMember }} {...{ job }} />
        </div>
      </ListItem>
    </>
  )

};

export default JobListItem;