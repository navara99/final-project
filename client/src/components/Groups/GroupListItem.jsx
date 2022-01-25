import React from "react";
import { ListItemText, Card, CardActions, CardActionArea } from "@mui/material";
import GroupAction from "./GroupAction";
import { Link } from "react-router-dom";
import { useState } from "react";

function GroupListItem({ group, openAddMembersModal, selectedGroup, setSelectedGroup, cardStyles, setMyGroups }) {
  const [hover, setHover] = useState(false)
  return (
    <Card style={cardStyles} onMouseEnter={(e) => setHover(true)} raised = {hover ? true : false} onMouseLeave={(e) => setHover(false)}  sx={{overflow:"unset",minWidth:300, maxWidth:350, borderRadius:4, border:'1px solid #006394', display:"flex", flexDirection:"column", justifyContent:"space-between", mt:2, rowGap:10}}>
      {/* <div className="organization-card" sx={{direction : "column"}}> */}
        <CardActionArea >
          <Link to={`/organizations/${group.id}`} style={{ textDecoration: 'none',  color: "black", display:"flex", flexDirection:"column" , position:"relative", top:-60}}>
            <img
              alt={group.name}
              className="organization-logo"
              src={`${group.logo}`}
              style={{alignSelf:"center",  borderRadius:'50%'}}
            />
            <ListItemText
              primary={<h3 className="organization-card-name" >{group.name}</h3>}
              secondary={group.description && group.description.length > 200 ? `${group.description.substring(0,200)}...` : group.description}
            />
          </Link>
        </CardActionArea>
        <CardActions>
          <GroupAction {...{ openAddMembersModal, setMyGroups, group, setSelectedGroup, selectedGroup }} />
        </CardActions>
      {/* </div> */}
    </Card >
  )
};

export default GroupListItem;