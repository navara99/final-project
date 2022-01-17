import React from "react";
import useExpand from "../../hooks/useExpand";
import { ListItemText, Card, Collapse, CardActions } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import JobForm from "./JobForm";
import JobsList from "./JobsList";
import GroupsBtn from "./GroupsBtn";
import { useState } from "react";

function OrganizationJobs({ cardStyles, organization, setSnackBarDetails }) {
  const { ExpandMore, handleExpandClick, expanded } = useExpand();
  const [jobFormOpen, setJobFormOpen] = useState(false);

  return (
    <div>
      <JobForm {...{ jobFormOpen }} {...{ setJobFormOpen }} {...{ setSnackBarDetails }} />
      <Card alignItems="flex-start" style={cardStyles}>
        <div className="organization-card">
          <ListItemText
            primary={<h2 className="organization-card-name">Jobs</h2>}
            secondary={`${organization.details.name} has ${organization.jobs.length} jobs listed.`}
          />
          <CardActions>
            {organization.isMember && <GroupsBtn text="New" variant="contained" icon={<AddIcon />} onClick={() => setJobFormOpen(!jobFormOpen)} />}
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