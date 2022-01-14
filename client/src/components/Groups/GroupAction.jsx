import React from "react";
import GroupsBtn from "./GroupsBtn";

function GroupAction() {



  const btnInfo = [
    {
      text: "Add Member",
      variant: "contained",
    },
    {
      text: "Edit",
      variant: "outlined"
    }
    ,
    {
      text: "Delete",
      variant: "outlined"
    }
  ];

  const btns = btnInfo.map((info, i) => {
    return <GroupsBtn key={i} text={info.text} variant={info.variant} />
  });


  return (
    <div className="organization-action-btn">
      {btns}
    </div>
  );
};

export default GroupAction;