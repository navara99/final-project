import React, { useState } from "react";
import { ListItemText, Card, IconButton, Collapse, CardActions } from "@mui/material";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function OrganizationHeader({ organization }) {
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="organization-details-header">
      <Card alignItems="flex-start">
        <div className="organization-card">
          <ListItemText
            primary={<h3 className="organization-card-name">{organization.details.name}</h3>}
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
          <div>HI</div>
        </Collapse>
      </Card >
    </div>
  )
};

export default OrganizationHeader;