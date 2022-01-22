import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import TimeAgo from "timeago-react";
import useEachJob from "../../hooks/useEachJob";

const JobDetailsDialog = ({ jobDetailsOpen, setJobDetailsOpen, job }) => {
  console.log(job);
  return (
    <Dialog
      open={jobDetailsOpen}
      onClose={() => setJobDetailsOpen(!jobDetailsOpen)}
    >
      <DialogTitle>{job && job.title}</DialogTitle>
      <DialogContent>
        <p>{job && job.description}</p>
        <p>Location: {job && job.location}</p>
        <p>Experience: {job && job.experience}</p>
        <p>Expected Salary: {job && job.salary}</p>
        <p>
          Posted: <TimeAgo datetime={job && job.created_at} locale="vi" />
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsDialog;
