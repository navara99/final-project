import React from "react";
import useExpand from "../../hooks/useExpand";
import { ListItemText, Card, IconButton, Collapse, CardActions } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MembersList from "./MembersList";

function OrganizationMembers({ organization, cardStyles }) {
  const { ExpandMore, handleExpandClick, expanded } = useExpand();

  return (
    <div>
      <Card alignItems="flex-start" style={cardStyles}>
        <div className="organization-card">
          <ListItemText
            primary={<h2 className="organization-card-name">Members</h2>}
            secondary={`${organization.details.name} has ${organization.members.length} member(s).`}
          />
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
          <MembersList members={organization.members} />
        </Collapse>
      </Card >
    </div>
  )
};

export default OrganizationMembers;