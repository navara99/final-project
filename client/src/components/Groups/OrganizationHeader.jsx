import React from "react";
import { ListItemText, Card, Collapse, CardActions, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useExpand from "../../hooks/useExpand";
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import {blueGrey} from "@mui/material/colors"
function OrganizationHeader({ organization, cardStyles }) {
  const { ExpandMore, handleExpandClick, expanded } = useExpand();
  return (
    <div >
      <Card style={cardStyles}>
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
          <div style={{marginTop:'20px'}}>
            <div style={{display:"flex", alignSelf:"center",marginTop:"10px"}}>
              <BusinessIcon fontSize ="large" />  <Typography component="span"  color={blueGrey["A700"]} variant="subtitle1"  sx={{ml:1, alignSelf:"center"}}> Industry : {organization.details.industry}</Typography>
            </div>
            <div style={{display:"flex", alignSelf:"center",marginTop:"10px"}}>
              <EmailIcon fontSize ="large" /> <Typography component="span"  color={blueGrey["A700"]} variant="subtitle1"  sx={{ml:1, alignSelf:"center"}}>  Email : {organization.details.email}</Typography>
            </div>
            <div style={{display:"flex", alignSelf:"center", marginTop:"10px"}}>
              <LanguageIcon fontSize ="large" />  <Typography component="span"  color={blueGrey["A700"]} variant="subtitle1"  sx={{ml:1, alignSelf:"center"}}> Website : {organization.details.website}</Typography>
            </div>
          </div>
        </Collapse>
      </Card >
    </div>
  )
};

export default OrganizationHeader;