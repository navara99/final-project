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

function GroupForm({ openForm, setOpenForm }) {


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
        />
        <TextField
          multiline
          rows="4"
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          required
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          fullWidth
          type="email"
          required
        />
        <TextField
          margin="dense"
          id="industry"
          label="Industry"
          fullWidth
          required
        />
        <TextField
          margin="dense"
          id="website"
          label="Website"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setOpenForm(!openForm) }}>Cancel</Button>
        <Button onClick={() => { }}>Create</Button>
      </DialogActions>
    </Dialog>
  )
};

export default GroupForm;