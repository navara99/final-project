import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  TextField,
  ListItem,
  Checkbox,
  ListItemText,
  List
} from "@mui/material";
import useAllUsers from "../../hooks/useAllUsers";
import { useState } from "react";

const AddMemberForm = ({ openAddMembersModal, setOpenAddMembersModal }) => {
  const allUsers = useAllUsers();
  const [selectedUsers, setSelectedUsers] = useState(new Array(allUsers.length).fill(false));

  const handleAddMember = () => {
    
  };

  const handleSearchChange = () => {

  };

  const toggleCheckBox = (i) => {
    selectedUsers[i] = !selectedUsers[i]
    setSelectedUsers([...selectedUsers])
  };

  const generateUsersList = () => {

    return allUsers.map(({ id, first_name, last_name, username }, i) => {
      return (
        <ListItem >
          <ListItemText>
            {`${first_name} ${last_name} (${username})`}
          </ListItemText>
          <Checkbox
            checked={selectedUsers[i]}
            color="primary"
            value={id}
            onChange={() => toggleCheckBox(i)}
          />
        </ListItem>
      )
    });

  }
  console.log(allUsers)
  return (
    <Dialog open={openAddMembersModal} onClose={() => { }}>
      <DialogTitle>Add users to group</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="search"
          label="Search"
          fullWidth
          onChange={handleSearchChange}
        />
        <List>
          {allUsers && generateUsersList()}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setOpenAddMembersModal(!openAddMembersModal) }}>Cancel</Button>
        <Button onClick={handleAddMember}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddMemberForm;