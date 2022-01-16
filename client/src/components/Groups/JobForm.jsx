import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button
} from "@mui/material";
import useInput from "../../hooks/useInput";
import axios from "axios";

function JobForm({ jobFormOpen, setJobFormOpen, setSnackBarDetails }) {
  const [title, setTitle] = useInput();
  const [description, setDescription] = useInput();
  const [experience, setExperience] = useInput();
  const [location, setLocation] = useInput();
  const [salary, setSalary] = useInput();


  const handleJobSubmit = () => {
    const jobDetails = {
      title,
      description,
      experience,
      location,
      salary
    };

    try {
      setSnackBarDetails({
        open: true,
        message: "Job successfully posted"
      });
      await axios.post("/api/organizations/:id/jobs", jobDetails);
      setJobFormOpen(!jobFormOpen);
    } catch (err) {
      console.log(err.message);
    };


  };

  return (
    <Dialog open={jobFormOpen} onClose={() => { }}>
      <DialogTitle>Post A Job</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Title"
          fullWidth
          required
          onChange={setTitle}
        />
        <TextField
          multiline
          rows="6"
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          required
          onChange={setDescription}
        />
        <TextField
          margin="dense"
          id="experience"
          label="Years Of Experience"
          fullWidth
          required
          onChange={setExperience}
          type="number"
        />
        <TextField
          margin="dense"
          id="location"
          label="Location"
          fullWidth
          required
          onChange={setLocation}
        />
        <TextField
          margin="dense"
          id="salary"
          label="Salary"
          fullWidth
          required
          onChange={setSalary}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setJobFormOpen(!jobFormOpen) }}>Cancel</Button>
        <Button onClick={handleJobSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  )
};

export default JobForm;