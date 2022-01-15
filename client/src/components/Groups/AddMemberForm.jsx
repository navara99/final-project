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
import axios from "axios";

const AddMemberForm = ({ openAddMembersModal, setOpenAddMembersModal, selectedGroup }) => {
  const allUsers = useAllUsers();
  const [selectedUsers, setSelectedUsers] = useState(new Array(allUsers.length).fill(false));

  const handleAddMember = async () => {
    const usersIdToAdd = allUsers.filter((users, i) => selectedUsers[i]).map((user) => user.id);
    console.log(usersIdToAdd);

    axios.post(`/api/organizations/${selectedGroup.id}`)
    setOpenAddMembersModal(!openAddMembersModal);
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
        <ListItem key={id}>
          <ListItemText>
            {`${first_name} ${last_name} (${username})`}
          </ListItemText>
          <Checkbox color="primary" onChange={() => toggleCheckBox(i)} />
        </ListItem>
      )
    });

  };

  return (
    <Dialog open={openAddMembersModal} onClose={() => { }}>
      <DialogTitle>Add users to group: {selectedGroup.name}</DialogTitle>
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