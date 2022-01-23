import React from "react";
import GroupsBtn from "./GroupsBtn";
import { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";
import ConfirmDelete from "./ConfirmDelete";
import EditGroup from "./EditGroup";

function GroupAction({ group, setMyGroups }) {
  const [confirmModal, setConfirmModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const deleteOrganization = async () => {

    try {
      await axios.delete(`api/organizations/${group.id}`);
      setMyGroups((prev) => prev.filter((organization) => organization.id !== group.id));
      setConfirmModal(!confirmModal);
    } catch (err) {
      console.log(err.message);
    }

  };

  const editOrganization = async (name, description, email, industry, website, logo) => {

    const newGroupInfo = {
      name,
      description,
      email,
      industry,
      website,
      logo
    };

    try {
      const { data } = await axios.put(`/api/organizations/${group.id}`, newGroupInfo);
      console.log(data);
    } catch (err) {
      console.log(err);
    };

  };

  const btnInfo = [
    {
      text: "Edit",
      variant: "outlined",
      icon: <Edit />,
      onClick: () => setEditModal(!editModal)
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
      <div className="organization-action-btns">
        <ConfirmDelete {...{
          onClick: deleteOrganization,
          confirmModal,
          setConfirmModal,
          message: `Are you sure you want to delete ${group.name}? This change is irreversible.`
        }} />
        <EditGroup {...{ group, editModal, setEditModal, editOrganization }} />
        {btns}
      </div>
    </>
  );
};

export default GroupAction;