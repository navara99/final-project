import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@mui/material";

function JobApplications({ job, openApplicants, setOpenApplicants }) {


  return (
    <Dialog open={openApplicants} >
      <DialogTitle>Applications for {job.title}</DialogTitle>
      <DialogContent>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setOpenApplicants(!openApplicants) }}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default JobApplications;