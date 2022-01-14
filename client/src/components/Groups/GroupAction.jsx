import React from "react";
import GroupsBtn from "./GroupsBtn";
import { Delete, Edit, Add, Person, Event, EventAvailableSharp } from "@mui/icons-material";

function GroupAction() {

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

  return (
    <div className="organization-action-btn">
      <div class="action-btns">
        <GroupsBtn text="Details" variant="contained" />
        <div>
          {btns}
        </div>
      </div>
    </div>
  );
};

export default GroupAction;