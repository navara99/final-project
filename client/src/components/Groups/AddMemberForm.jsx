import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  DialogContentText,
  ListItem,
  Checkbox,
  ListItemText
} from "@mui/material";

const AddMemberForm = ({ openAddMembersModal, setOpenAddMembersModal }) => {

  const handleAddMember = () => {

  };

  const handleSearchChange = () => {

  };

  return (
    <Dialog open={openAddMembersModal} onClose={() => { }}>
      <DialogTitle>Add users to group</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Search
        </DialogContentText>
        <ListItem >
          <Checkbox
            checked={true}
            color="primary"
            value={1}
          />
          <ListItemText>
            {"Some user"}
          </ListItemText>
        </ListItem>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setOpenAddMembersModal(!openAddMembersModal) }}>Cancel</Button>
        <Button onClick={handleAddMember}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddMemberForm;