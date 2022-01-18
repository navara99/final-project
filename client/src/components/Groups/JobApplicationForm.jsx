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
import useInput from "../../hooks/useInput";
import { useState } from "react";

function JobApplicationForm({ job, openApplicationForm, setOpenApplicationForm, setSnackBarDetails }) {
  const [message, setMessage] = useInput();
  const [resume, setResume] = useState();

  async function handleApplicationSubmissions(e) {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("jobId", job.id);
      formData.append("message", message);
      formData.append("resume", resume[0]);

      await axios.post("/api/applications", formData, {
        headers: {
          "Content-Type": "multipart/formdata"
        }
      });
      setOpenApplicationForm(!openApplicationForm);
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
      <form onSubmit={handleApplicationSubmissions} >
        <DialogTitle>Apply To Posting: {job.title}</DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            component="label"
          >Upload Resume<input
              type="file"
              onChange={(e) => setResume(e.target.files)}
              name="resume"
              hidden />
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
            onChange={setMessage}
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