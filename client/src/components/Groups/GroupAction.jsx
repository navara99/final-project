import React from "react";
import GroupsBtn from "./GroupsBtn";
import { Delete, Edit, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";

function GroupAction({ openAddMembersModal, setOpenAddMembersModal, group }) {

  const btnInfo = [
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

  return (
    <div className="organization-action-btns">
      {btns}
    </div>
  );
};

export default GroupAction;