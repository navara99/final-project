import React from "react";
import GroupsBtn from "./GroupsBtn";
import { Link } from "react-router-dom"

function FairsAction({ id, isMember }) {


  return (
    <div>
      <Link to={`/fairs/${id}`} style={{ textDecoration: 'none' }}>
        <GroupsBtn text="View" variant="contained" />
      </Link>
      {isMember && <GroupsBtn text="Edit" variant="outlined" />}
      {isMember && <GroupsBtn text="Cancel" variant="outlined" />}
    </div>
  )

}

export default FairsAction;