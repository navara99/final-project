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
import { useEffect } from "react";

const AddMemberForm = ({ openAddMembersModal, setOpenAddMembersModal, id, setSnackBarDetails, setOrganizationDetails, organization }) => {
  const allUsers = useAllUsers();
  const [selectedUsers, setSelectedUsers] = useState(new Array(allUsers.length).fill(false));
  const [users, setUsers] = useState(allUsers);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() =>{
    let membersId = organization.members.map(m => m.id)
    setUsers(allUsers.filter(user => !membersId.includes(user.id)));
  }, [allUsers, organization]);
  console.log("users", users);
  const handleAddMember = async () => {
    const usersIdToAdd = allUsers.filter((users, i) => selectedUsers[i]).map((user) => user.id);

    try {
      const { data } = await axios.post(`/api/organizations/${id}/users`, { usersIdToAdd });
      setOrganizationDetails((prev) => ({ ...prev, members: [...data] }))
      setOpenAddMembersModal(!openAddMembersModal);
      setSnackBarDetails({
        open: true,
        message: "Members have been added."
      });
    } catch (err) {
      console.log(err);
    };

  };
  useEffect(()=>{
    if(searchWord){
      let word = searchWord.toLowerCase()
      setUsers(allUsers.filter((user) => {
        if (user.first_name.toLowerCase().includes(word) || user.last_name.toLowerCase().includes(word)|| user.username.toLowerCase().includes(word)){
         return user 
        }
        return null
      }))
    }else {setUsers(allUsers);}
    
  },[searchWord])
  const handleSearchChange = (e) => {
    setSearchWord(e.target.value);
  };

  const toggleCheckBox = (i) => {
    selectedUsers[i] = !selectedUsers[i]
    setSelectedUsers([...selectedUsers])
  };

  const generateUsersList = () => {
        if(organization){
          console.log("organization", organization);
        }
    // return allUsers.map(({ id, first_name, last_name, username }, i) => {
    //   return (
    //     <ListItem key={id}>
    //       <ListItemText>
    //         {`${first_name} ${last_name} (${username})`}
    //       </ListItemText>
    //       <Checkbox color="primary" onChange={() => toggleCheckBox(i)} />
    //     </ListItem>
    //   )
    // });

    return users.map(({ id, first_name, last_name, username }, i) => {
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
      <DialogTitle>Add users to group</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="search"
          label="Search"
          value={searchWord}
          fullWidth
          onChange={handleSearchChange}
        />
        <List>
          {allUsers && users && generateUsersList()}
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