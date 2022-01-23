import React from "react";
import GroupsBtn from "./GroupsBtn";
import { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";
import ConfirmDelete from "./ConfirmDelete";

function GroupAction({ group }) {
  const [confirmModal, setConfirmModal] = useState(false);

  const deleteOrganization = async () => {

    try {
      await axios.delete(`/organizations/${group.id}`);
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
      onClick: () => setConfirmModal(!confirmModal)
    }
  ];

  const btns = btnInfo.map((info, i) => {
    return <GroupsBtn key={i} text={info.text} variant={info.variant} icon={info.icon} onClick={info.onClick} />
  });

  return (
    <>
      <ConfirmDelete {...{
        onClick: deleteOrganization,
        confirmModal,
        setConfirmModal,
        message: `Are you sure you want to delete ${group.name}?. This change is irreversible.`
      }} />
      <div className="organization-action-btns">
        {btns}
      </div>
    </>
  );
};

export default GroupAction;