import React,{useEffect, useState} from "react";
import { ListItem, ListItemText } from "@mui/material"
import JobActions from "./JobActions";
import TimeAgo from "timeago-react";
import useApplications from "../../hooks/useApplications";


function JobListItem({ job, isMember, setSnackBarDetails, currentUser }) {
  const [isApplied, setApplied] = useState(false);
  const job_id = job.id;
  const[applications] = useApplications(job_id);
  useEffect(() => {
    if(currentUser && applications) {
      if(applications.length > 0) {
        setApplied(applications.filter(app => app.user_id === currentUser.id).length > 0)
      }
    }
  },[applications, currentUser]);
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
          <JobActions {...{ isMember }} {...{ job }}  {...{ setSnackBarDetails }} {...{currentUser}} isApplied={isApplied} setApplied={setApplied} />
        </div>
      </ListItem>
    </>
  )

};

export default JobListItem;