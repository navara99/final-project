import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import TimeAgo from "timeago-react";
import useEachJob from "../../hooks/useEachJob";

const JobDetailsDialog = ({ jobDetailsOpen, setJobDetailsOpen, job }) => {
  
  return (
    <Dialog
      open={jobDetailsOpen}
      onClose={() => setJobDetailsOpen(!jobDetailsOpen)}
    >
      <DialogTitle>{job.title}</DialogTitle>
      <DialogContent>
        <p>{job.description}</p>
        <p>Location: {job.location}</p>
        <p>Experience: {job.experience}</p>
        <p>Expected Salary: {job.salary}</p>
        <p>
          Posted: <TimeAgo datetime={job.created_at} locale="vi" />
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsDialog;
