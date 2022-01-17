import React from "react";
import { ListItemText, Card, Collapse, CardActions } from "@mui/material";
import useExpand from "../../hooks/useExpand";
import GroupsBtn from "./GroupsBtn";
import Add from "@mui/icons-material/Add";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function OrganizationFairs({ organization, cardStyles }) {
  const { ExpandMore, handleExpandClick, expanded } = useExpand();

  return (
    <div>
      <Card alignItems="flex-start" style={cardStyles}>
        <div className="organization-card">
          <ListItemText
            primary={<h2 className="organization-card-name">Fairs</h2>}
            secondary={`${organization.details.name} is a part of ${organization.fairs.length} fair(s).`}
          />
          <CardActions>
            <GroupsBtn
              text="New"
              variant="contained"
              icon={<Add />}
              onClick={() => { }}
            />
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
          {/* <MembersList members={organization.members} /> */}
        </Collapse>
      </Card >
    </div>
  )
}

export default OrganizationFairs;