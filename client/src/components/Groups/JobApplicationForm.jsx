import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from "@mui/material";
import axios from "axios";

function JobApplicationForm({ job, openApplicationForm, setOpenApplicationForm, setSnackBarDetails }) {

  async function handleApplicationSubmissions(e) {
    e.preventDefault();

    try {
      const formData = new FormData(this);
      formData.append("jobId", job.id);
      console.log(...formData);
      await axios.post("/api/applications", formData);
      setSnackBarDetails({
        open: true,
        message: "Application Submitted"
      });
    } catch (err) {
      console.log(err.message);
    };


  };

  return (
    <Dialog open={openApplicationForm} onClose={() => { }}>
      <form onSubmit={handleApplicationSubmissions}>
        <DialogTitle>Apply To Posting: {job.title}</DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            component="label"
          >Upload Resume<input type="file" hidden />
          </Button>
          <TextField
            autoFocus
            multiline
            rows="6"
            id="cover-letter"
            name="message"
            label="Cover Letter/Message"
            fullWidth
            sx={{ mt: "1em" }}
            onChange={() => { }}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenApplicationForm(!openApplicationForm)}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </form>
    </Dialog >
  )
}

export default JobApplicationForm;