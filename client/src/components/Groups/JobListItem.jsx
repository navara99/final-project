import React, { useEffect, useState } from "react";
import { ListItem, ListItemText } from "@mui/material"
import JobActions from "./JobActions";
import { formatDate } from "../../helpers/date";
import useApplications from "../../hooks/useApplications";

function JobListItem({ job, isMember, setSnackBarDetails, currentUser }) {
  const [isApplied, setApplied] = useState(false);
  const job_id = job.id;
  const [applications] = useApplications(job_id);
  useEffect(() => {
    if (currentUser && applications) {
      if (applications.length > 0) {
        setApplied(applications.filter(app => app.user_id === currentUser.id).length > 0)
      }
    }
  }, [applications, currentUser]);


  const jobDescription = `
    ${job.description} \n 
    Location: ${job.location} \n 
    Experience: ${job.experience} \n 
    Expected Salary: ${job.salary} \n
    Posted: ${formatDate(job.created_at)}
    `

  return (
    <>
      <ListItem>
        <div>
          <ListItemText
            primary={job.title}
            secondary={jobDescription.split("\n").map((elem, i) => <span className="job-info" key={i} style={{ display: "block" }}>{elem}</span>)}
          />
          <JobActions {...{ isMember }} {...{ job }}  {...{ setSnackBarDetails }} {...{ currentUser }} isApplied={isApplied} setApplied={setApplied} />
        </div>
      </ListItem>
    </>
  )

};

export default JobListItem;