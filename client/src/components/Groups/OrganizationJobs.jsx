import React from "react";
import useExpand from "../../hooks/useExpand";
import { ListItemText, Card, IconButton, Collapse, CardActions, CardMedia } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

import JobsList from "./JobsList";
import GroupsBtn from "./GroupsBtn";

function OrganizationJobs({ cardStyles, organization }) {
  const { ExpandMore, handleExpandClick, expanded } = useExpand();

  return (
    <div className="organization-details-header">
      <Card alignItems="flex-start" style={cardStyles}>
        <div className="organization-card">
          <ListItemText
            primary={<h2 className="organization-card-name">Jobs</h2>}
            secondary={`${organization.details.name} has ${organization.jobs.length} jobs listed.`}
          />
          <CardActions>
            <GroupsBtn text="New Job" variant="contained" icon={<AddIcon />} />
            <ExpandMore
              style={{ marginLeft: "1em" }}
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
          <JobsList jobs={organization.jobs} isMember={organization.isMember} />
        </Collapse>
      </Card >
    </div>
  );
};

export default OrganizationJobs;