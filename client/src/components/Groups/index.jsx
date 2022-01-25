import React from "react";
import { List, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import "./groups.css";
import GroupListItem from "./GroupListItem";
import GroupForm from "./GroupForm";
import { useState } from "react";
import useMyGroups from "../../hooks/useMyGroups";
import useTitle from "../../hooks/useTitle";

const cardStyles = {
  padding: "2em",
  margin: "1em"
};

function Groups({ setSnackBarDetails }) {
  const [openForm, setOpenForm] = useState(false);
  const { myGroups, setMyGroups } = useMyGroups();
  const [selectedGroup, setSelectedGroup] = useState();

  useTitle("My Organizations");

  const renderMyGroups = (myGroups) => {

    return myGroups.sort((a, b) => b.id - a.id).map((group) => {
      return <GroupListItem
        key={group.id}
        {...{ group, selectedGroup, setSelectedGroup, cardStyles, setSnackBarDetails, setMyGroups }}
      />
    });

  };

  return (
    <div className="groups-container">
      <div className="organization-header">
        <h1>Your Organizations</h1>
        <Button style={{ height: "50%" }} variant="contained" startIcon={<Add />} onClick={() => setOpenForm(!openForm)}>Add Organization</Button>
        <GroupForm {...{ openForm }} {...{ setOpenForm }}  {...{ setMyGroups }} />
      </div>
      <List sx={{ width: '90%', paddingTop: "2em",mt:4, display:"flex", justifyContent:"center" }}>
        {myGroups && renderMyGroups(myGroups)}
      </List>
    </div>
  )
}

export default Groups;