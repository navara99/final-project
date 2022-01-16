import React from "react";
import GroupsBtn from "./GroupsBtn";
import { Delete, Edit, Add, Person, Event, EventAvailableSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

function GroupAction({ openAddMembersModal, setOpenAddMembersModal, group, selectedGroup, setSelectedGroup }) {

  const btnInfo = [
    // {
    //   text: "Add Member",
    //   variant: "contained",
    //   icon: <Add />
    // },
    // {
    //   text: "View Members",
    //   variant: "contained",
    //   icon: <Person />
    // },
    // {
    //   text: "View Fairs",
    //   variant: "contained",
    //   icon: <Event />
    // },
    {
      text: "Edit",
      variant: "outlined",
      icon: <Edit />
    }
    ,
    {
      text: "Delete",
      variant: "outlined",
      icon: <Delete />
    }
  ];

  const btns = btnInfo.map((info, i) => {
    return <GroupsBtn key={i} text={info.text} variant={info.variant} icon={info.icon} />
  });

  const handleAddMemberBtn = () => {
    setSelectedGroup(group);
    setOpenAddMembersModal(!openAddMembersModal)
  }

  return (
    <div className="organization-action-btn">
      <div className="action-btns">
        <div>
          <Link to={`/groups/${group.id}`} style={{ textDecoration: 'none' }}>
            <GroupsBtn text="Details" variant="contained" />
          </Link>
          <GroupsBtn
            text="Add member"
            variant="contained"
            icon={<Person />}
            onClick={handleAddMemberBtn}
          />
        </div>
        <div>
          {btns}
        </div>
      </div>
    </div>
  );
};

export default GroupAction;