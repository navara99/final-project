import React from "react";
import { ListItemText, Card, Collapse, CardActions } from "@mui/material";
import useExpand from "../../hooks/useExpand";
import GroupsBtn from "./GroupsBtn";
import Add from "@mui/icons-material/Add";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FairsList from "./FairsList";
import { useState } from "react";
import FairsForm from "./FairsForm";

function OrganizationFairs({ organization, cardStyles, setOrganizationDetails, setSnackBarDetails }) {
  const { ExpandMore, handleExpandClick, expanded } = useExpand();
  const [fairsFormOpen, setFairsFormOpen] = useState(false);


  return (
    <div>
      <FairsForm
        {...{ fairsFormOpen }}
        {...{ setFairsFormOpen }}
        {...{ setOrganizationDetails }}
        {...{ setSnackBarDetails }}
      />
      <Card alignItems="flex-start" style={cardStyles}>
        <div className="organization-card">
          <ListItemText
            primary={<h2 className="organization-card-name">Fairs</h2>}
            secondary={`${organization.details.name} is a part of ${organization.fairs.length} fair(s).`}
          />
          <CardActions>
            {organization.isMember && <GroupsBtn
              text="New"
              variant="contained"
              icon={<Add />}
              onClick={() => setFairsFormOpen(!fairsFormOpen)}
            />}
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
          {<FairsList fairs={organization.fairs} isMember={organization.isMember} />}
        </Collapse>
      </Card >
    </div>
  )
}

export default OrganizationFairs;