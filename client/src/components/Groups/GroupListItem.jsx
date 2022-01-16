import React, { useState } from "react";
import { ListItemText, Card, IconButton, Collapse, CardActions } from "@mui/material";
import GroupAction from "./GroupAction";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function GroupListItem({ group, openAddMembersModal, setOpenAddMembersModal, selectedGroup, setSelectedGroup, cardStyles }) {
  const [expanded, setExpanded] = useState(false)

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  return (
    <Card alignItems="flex-start" style={cardStyles}>
      <div className="organization-card">
        <Link to={`/organizations/${group.id}`} style={{ textDecoration: 'none', display: "flex", color:"black" }}>
          <img
            className="organization-logo"
            src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1"
          />
          <ListItemText
            primary={<h3 className="organization-card-name">{group.name}</h3>}
            secondary={<p>{group.description}</p>}
          />
        </Link>
        <CardActions>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <GroupAction
          {...{ openAddMembersModal }}
          {...{ setOpenAddMembersModal }}
          {...{ group }}
          {...{ selectedGroup }}
          {...{ setSelectedGroup }}
        />
      </Collapse>
    </Card >
  )
};

export default GroupListItem;