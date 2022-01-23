import React from "react";
import GroupsBtn from "./GroupsBtn";
import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";

function GroupAction({ openAddMembersModal, setOpenAddMembersModal, group }) {

  const deleteOrganization = async () => {

    try {
      await axios.delete("/organizations/");
    } catch (err) {
      console.log(err.message);
    }

  };

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
      icon: <Delete />,
      onClick: deleteOrganization
    }
  ];

  const btns = btnInfo.map((info, i) => {
    return <GroupsBtn key={i} text={info.text} variant={info.variant} icon={info.icon} onClick={info.onClick} />
  });

  return (
    <div className="organization-action-btns">
      {btns}
    </div>
  );
};

export default GroupAction;