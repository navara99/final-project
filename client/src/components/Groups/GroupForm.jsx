import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button
} from "@mui/material";
import React from "react";
import useInput from "../../hooks/useInput";
import axios from "axios";

function GroupForm({ openForm, setOpenForm }) {
  const [name, handleNameChange] = useInput("");
  const [description, handleDescriptionChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [industry, handleIndustryChange] = useInput("");
  const [website, handleWebsiteChange] = useInput("");

  const createOrganization = async () => {

    const newGroupInfo = {
      name,
      description,
      email,
      industry,
      website
    };

    try {
      const { data } = await axios.post("/api/organizations", newGroupInfo);
      console.log(data);
    } catch (err) {
      console.log(err);
    };

  };

  return (
    <Dialog open={openForm} onClose={() => { }}>
      <DialogTitle>Create New Organization</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add your organization's info
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Organization Name"
          fullWidth
          required
          onChange={handleNameChange}
        />
        <TextField
          multiline
          rows="4"
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          required
          onChange={handleDescriptionChange}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          fullWidth
          type="email"
          required
          onChange={handleEmailChange}
        />
        <TextField
          margin="dense"
          id="industry"
          label="Industry"
          fullWidth
          required
          onChange={handleIndustryChange}
        />
        <TextField
          margin="dense"
          id="website"
          label="Website"
          fullWidth
          onChange={handleWebsiteChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setOpenForm(!openForm) }}>Cancel</Button>
        <Button onClick={createOrganization}>Create</Button>
      </DialogActions>
    </Dialog>
  )
};

export default GroupForm;