import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from "@mui/material";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useParams } from "react-router";

function JobForm({ jobFormOpen, setJobFormOpen, setSnackBarDetails }) {
  const [title, setTitle] = useInput();
  const [description, setDescription] = useInput();
  const [experience, setExperience] = useInput();
  const [location, setLocation] = useInput();
  const [salary, setSalary] = useInput();
  const { id } = useParams();

  const handleJobSubmit = async () => {
    const jobDetails = {
      title,
      description,
      experience,
      location,
      salary
    };

    try {
      await axios.post(`/api/organizations/${id}/jobs`, jobDetails);
      setJobFormOpen(!jobFormOpen);
      setSnackBarDetails({
        open: true,
        message: "Job successfully posted"
      });
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
          id="title"
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