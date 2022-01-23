import React from "react";
import useInput from "../../hooks/useInput";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button
} from "@mui/material";

function EditGroup({ group, editModal, editOrganization, setEditModal }) {
  const [newName, handleNewNameChange] = useInput(group.name);
  const [newDescription, handleNewDescriptionChange] = useInput(group.description);
  const [newEmail, handleNewEmailChange] = useInput(group.email);
  const [newIndustry, handleNewIndustryChange] = useInput(group.industry);
  const [newWebsite, handleNewWebsiteChange] = useInput(group.website);
  const [newLogo, handleNewLogoChange] = useInput(group.logo);

  const handleEdit = () => {
    editOrganization(newName, newDescription, newEmail, newIndustry, newWebsite, newLogo);
    setEditModal(!editModal);
  };

  const handleClose = () => {
    setEditModal(!editModal);
  };

  return (
    <Dialog open={editModal} onClose={() => { }}>
      <DialogTitle>Edit Organization</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add {group.name}'s info
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Organization Name"
          fullWidth
          required
          value={newName}
          onChange={handleNewNameChange}
        />
        <TextField
          multiline
          rows="4"
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          required
          value={newDescription}
          onChange={handleNewDescriptionChange}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          fullWidth
          type="email"
          value={newEmail}
          required
          onChange={handleNewEmailChange}
        />
        <TextField
          margin="dense"
          id="industry"
          label="Industry"
          fullWidth
          required
          value={newIndustry}
          onChange={handleNewIndustryChange}
        />
        <TextField
          margin="dense"
          id="website"
          label="Website"
          fullWidth
          value={newWebsite}
          onChange={handleNewWebsiteChange}
        />
        <TextField
          margin="dense"
          id="logo"
          value={newLogo}
          label="Organization Logo"
          fullWidth
          onChange={handleNewLogoChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleEdit}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditGroup;