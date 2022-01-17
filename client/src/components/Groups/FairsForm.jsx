import React from "react";
import { Dialog, DialogTitle, TextField, DialogContent, Button, DialogActions } from "@mui/material";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useParams } from "react-router";

function FairsForm({ fairsFormOpen, setFairsFormOpen }) {
  const [name, setName] = useInput();
  const [description, setDescription] = useInput();
  const { id } = useParams();

  const handleFairSubmit = async () => {
    const newFair = {
      name,
      description,
      hostId: id
    };

    try {
      const { data } = await axios.post("/api/fairs", newFair);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }

  };

  console.log(fairsFormOpen);
  return (
    <Dialog open={fairsFormOpen} onClose={() => { }}>
      <DialogTitle>Create A New Fair</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          required
          onChange={setName}
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
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setFairsFormOpen(!fairsFormOpen) }}>Cancel</Button>
        <Button onClick={handleFairSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FairsForm;