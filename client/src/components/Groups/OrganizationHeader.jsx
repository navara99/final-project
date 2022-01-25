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
      <Card style={cardStyles} sx={{display:"flex", gap:"40px"}}>
        <div >
          <img
            alt={organization.name}
            // className="organization-logo"
            style={{height: 100, width: 100, borderRadius:'50%'}}
            src={`${organization.details.logo}`}
          />
          <div style={{marginTop:'20px'}}>
            <div style={{display:"flex", alignSelf:"center",marginTop:"10px"}}>
              <BusinessIcon fontSize ="large" />  <Typography component="span"  color={blueGrey["A700"]} variant="subtitle1"  sx={{ml:1, alignSelf:"center"}}>{organization.details.industry}</Typography>
            </div>
            <div style={{display:"flex", alignSelf:"center",marginTop:"10px"}}>
              <EmailIcon fontSize ="large" /> <Typography component="span"  color={blueGrey["A700"]} variant="subtitle1"  sx={{ml:1, alignSelf:"center"}}>{organization.details.email}</Typography>
            </div>
            <div style={{display:"flex", alignSelf:"center", marginTop:"10px"}}>
              <LanguageIcon fontSize ="large" />  <Typography component="span"  color={blueGrey["A700"]} variant="subtitle1"  sx={{ml:1, alignSelf:"center"}}>{organization.details.website}</Typography>
            </div>
          </div>
          </div>
          <ListItemText
            primary={<h2 className="organization-card-name">{organization.details.name}</h2>}
            secondary={organization.details.description}
          />  

      </Card >
    </div>
  )
};

export default OrganizationHeader;