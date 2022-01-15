import React from "react";
import { List, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import "./groups.css";
import GroupListItem from "./GroupListItem";
import GroupForm from "./GroupForm";
import { useState } from "react";
import useMyGroups from "../../hooks/useMyGroups";
import AddMemberForm from "./AddMemberForm";

function Groups() {
  const [openForm, setOpenForm] = useState(false);
  const [openAddMembersModal, setOpenAddMembersModal] = useState(false);
  const { myGroups, setMyGroups } = useMyGroups();

  const renderMyGroups = (myGroups) => {
    return myGroups.sort((a, b) => b.id - a.id).map(({ name, description, industry, website, id }) => {
      return <GroupListItem
        key={id}
        {...{ name }}
        {...{ description }}
        {...{ industry }}
        {...{ website }}
        {...{ openAddMembersModal }}
        {...{ setOpenAddMembersModal }}
      />
    })
  };

  return (
    <div className="groups-container">
      <AddMemberForm {...{ openAddMembersModal }} {...{ setOpenAddMembersModal }} />
      <div className="organization-header">
        <h1>Your Organizations</h1>
        <Button variant="contained" startIcon={<Add />} onClick={() => setOpenForm(!openForm)}>Add Organization</Button>
        <GroupForm {...{ openForm }} {...{ setOpenForm }}  {...{ setMyGroups }} />
      </div>
      <List sx={{ width: '90%', paddingTop: "2em" }}>
        {myGroups && renderMyGroups(myGroups)}
      </List>
    </div>
  )
}

export default Groups;