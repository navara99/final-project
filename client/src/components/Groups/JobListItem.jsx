import React, { useState } from "react";
import { ListItem, ListItemText } from "@mui/material"
import JobActions from "./JobActions";
import { formatDate } from "../../helpers/date";
import { ListItemAvatar, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function JobListItem({ job, setJobs, isMember, setSnackBarDetails, currentUser, updateAppliedJobs }) {
  const [isApplied, setApplied] = useState(job.applied);
  const [like, setLike] = useState(job.liked);

  const jobDescription = `
    ${job.description} \n 
    Company: ${job.organizationname} \n
    Location: ${job.location} \n 
    Experience: ${job.experience} \n 
    Expected Salary: ${job.salary} \n
    Posted: ${formatDate(job.created_at)}
    `

  return (
    <ListItem className="job-list-item">
      <Link to={`/organizations/${job.organization_id}`}>
        <ListItemAvatar>
          <Avatar alt={job.organizationname} src={job.organizationlogo} />
        </ListItemAvatar>
      </Link>
      <div style={{ width: "80%" }}>
        <ListItemText
          primary={job.title}
          secondary={jobDescription.split("\n").map((elem, i) => <span className="description-info" key={i} style={{ display: "block" }}>{elem}</span>)}
        />
      </div>
      <JobActions {...{ isMember, setJobs, job, setSnackBarDetails, currentUser, isApplied, setApplied, like, setLike, updateAppliedJobs }} />
    </ListItem>
  )

};

export default JobListItem;