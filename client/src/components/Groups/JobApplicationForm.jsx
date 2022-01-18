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
      <DialogTitle>Apply To Posting: {job.title}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleApplicationSubmissions}>
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
            label="Cover Letter/Message"
            fullWidth
            sx={{ mt: "1em" }}
            onChange={() => { }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenApplicationForm(!openApplicationForm)}>Cancel</Button>
        <Button >Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default JobApplicationForm;