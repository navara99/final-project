import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Switch,
  FormControlLabel
} from "@mui/material";
import axios from "axios";
import useInput from "../../hooks/useInput";
import { useState } from "react";

function JobApplicationForm({ job, openApplicationForm, setOpenApplicationForm, setSnackBarDetails, setApplied, currentUser }) {
  const [message, setMessage] = useInput();
  const [resume, setResume] = useState();
  const [showResumeInput, setResumeInput] = useState(false);
  async function handleApplicationSubmissions(e) {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("jobId", job.id);
      formData.append("message", message);
      resume && resume[0]? formData.append("resume", resume[0]) : formData.append("resume", currentUser.resume);
     

      await axios.post("/api/applications", formData, {
        headers: {
          "Content-Type": "multipart/formdata"
        }
      });
      setApplied(true);
      setOpenApplicationForm(!openApplicationForm);
      setSnackBarDetails({
        open: true,
        message: "Application Submitted"
      });
    } catch (err) {
      console.log(err.message);
    };

  };

  const handleResumeToggle = () => {
    setResumeInput(!showResumeInput);
  };

  const handleCancel = () => {
    setResume(null);
    setResumeInput(false)
    setOpenApplicationForm(!openApplicationForm);
  };

  return (
    <Dialog open={openApplicationForm} fullWidth maxWidth="md" >
      <form onSubmit={handleApplicationSubmissions} >
        <DialogTitle>Apply To Posting: {job.title}</DialogTitle>
        <DialogContent>
          <div >
            <FormControlLabel control={<Switch defaultChecked onChange={handleResumeToggle} />} label={"Use resume from profile"} />
            {showResumeInput &&
              <>
                <Button
                  variant="contained"
                  component="label"
                >Upload Resume<input
                    type="file"
                    onChange={(e) => setResume(e.target.files)}
                    name="resume"
                    hidden />
                </Button>
                <span className="filename">{resume && resume[0].name}</span>
              </>
            }

          </div>
          <TextField
            autoFocus
            multiline
            rows="7"
            id="cover-letter"
            name="message"
            label="Cover Letter/Message"
            fullWidth
            sx={{ mt: "1em" }}
            onChange={setMessage}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </form>
    </Dialog >
  )
}

export default JobApplicationForm;