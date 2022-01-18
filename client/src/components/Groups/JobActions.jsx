import React from "react";
import GroupsBtn from "./GroupsBtn";

function JobActions({ job, isMember }) {


  return (
    <>
      {!isMember && <GroupsBtn text={"Apply"} />}
      {isMember && <GroupsBtn text={`Applications (${job.applications.length})`} />}
      <GroupsBtn text={"Details"} />
    </>
  )

};

export default JobActions;
