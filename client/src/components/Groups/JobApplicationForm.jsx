import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from "@mui/material";

function JobApplicationForm({ job, openApplicationForm, setOpenApplicationForm }) {

  const handleApplicationSubmissions = () => {

  }

  console.log(job);

  return (
    <Dialog open={openApplicationForm} onClose={() => { }}>
      <DialogTitle>Apply To Posting: {job.title}</DialogTitle>
      <DialogContent>
        <Button
          variant="contained"
          component="label"
        >
          Upload Resume
          <input
            type="file"
            hidden
            fullWidth
          />
        </Button>
        <TextField
          autoFocus
          multiline
          rows="6"
          id="cover-letter"
          label="Cover Letter/Message"
          fullWidth
          sx={{ mt: "1em" }}
          onChange={() => { }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenApplicationForm(!openApplicationForm)}>Cancel</Button>
        <Button onClick={handleApplicationSubmissions}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default JobApplicationForm;