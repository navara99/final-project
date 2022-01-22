import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

const JobDetailsDialog = ({ jobDetailsOpen, setJobDetailsOpen, job }) => {
  return (
    <Dialog
      open={jobDetailsOpen}
      onClose={() => setJobDetailsOpen(!jobDetailsOpen)}
    >
      <DialogTitle>Job title</DialogTitle>
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
