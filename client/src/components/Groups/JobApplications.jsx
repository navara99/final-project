import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@mui/material";
import ApplicantsList from "./ApplicantsList";

function JobApplications({ job, openApplicants, setOpenApplicants }) {


  return (
    <Dialog open={openApplicants} fullWidth={true}>
      <DialogTitle>Applications for {job.title}</DialogTitle>
      <DialogContent>
        <ApplicantsList applications={job.applications} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setOpenApplicants(!openApplicants) }}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default JobApplications;