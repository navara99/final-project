import React from "react";
import { ListItemText, Card, Collapse, CardActions } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useExpand from "../../hooks/useExpand";

function OrganizationHeader({ organization, cardStyles }) {
  const { ExpandMore, handleExpandClick, expanded } = useExpand();
  return (
    <div >
      <Card alignItems="flex-start" style={cardStyles}>
        <div className="organization-card">
          <img
            alt={organization.name}
            className="organization-logo"
            src={`${organization.details.logo}`}
          />
          <ListItemText
            primary={<h2 className="organization-card-name">{organization.details.name}</h2>}
            secondary={organization.details.description}
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
          <p>Industry: {organization.details.industry}</p>
          <p>Email: {organization.details.email}</p>
          <p>Website: {organization.details.website}</p>
        </Collapse>
      </Card >
    </div>
  )
};

export default OrganizationHeader;