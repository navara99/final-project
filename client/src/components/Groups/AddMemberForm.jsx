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
import useAllUsers from "../../hooks/useAllUsers";

const AddMemberForm = ({ openAddMembersModal, setOpenAddMembersModal }) => {
  const allUsers = useAllUsers();
  const [selectedUsers, setSelectedUsers] = useAllUsers(new Array(allUsers.length).fill(false));

  const handleAddMember = () => {

  };

  const handleSearchChange = () => {

  };

  const toggleCheckBox = (i) => {
    selectedUsers[i] = !selectedUsers[i]
    setSelectedUsers([...selectedUsers])
  };

  const generateUsersList = () => {
    allUsers.map(({ id, first_name, last_name, username }, i) => {
      <ListItem >
        <ListItemText>
          {`${first_name} ${last_name} (${username})`}
        </ListItemText>
        <Checkbox
          checked={true}
          color="primary"
          value={id}
          onChange={() => toggleCheckBox(i)}
        />
      </ListItem>
    });
  }

  return (
    <Dialog open={openAddMembersModal} onClose={() => { }}>
      <DialogTitle>Add users to group</DialogTitle>
      <DialogContent>
        <DialogContentText>Search</DialogContentText>
        {generateUsersList()}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setOpenAddMembersModal(!openAddMembersModal) }}>Cancel</Button>
        <Button onClick={handleAddMember}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddMemberForm;