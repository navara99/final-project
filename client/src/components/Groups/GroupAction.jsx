import React from "react";
import GroupsBtn from "./GroupsBtn";
import { Delete, Edit, Add } from "@mui/icons-material";

function GroupAction() {

  const btnInfo = [
    {
      text: "Add Member",
      variant: "contained",
      icon: <Add />
    },
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
    <div className="organization-action-btn">
      {btns}
    </div>
  );
};

export default GroupAction;