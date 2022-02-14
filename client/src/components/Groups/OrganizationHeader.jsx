import React, { useState } from "react";
import { ListItemText, Card, Typography, Link } from "@mui/material";

import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { blueGrey } from "@mui/material/colors";

import ConfirmDelete from "./ConfirmDelete.jsx";
import GroupsBtn from "./GroupsBtn";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function OrganizationHeader({ organization, cardStyles, setSnackBarDetails }) {
  const [confirmModal, setConfirmModal] = useState(false);
  const navigate = useNavigate();

  const leaveOrganization = async () => {
    const { id } = organization.details;

    try {
      await axios.post(`/api/organizations/${id}/leave`);
      navigate("/organizations");
      setSnackBarDetails({
        open: true,
        message: `Successfully left ${organization.details.name}.`
      })
    } catch (err) {
      console.log(err.message);
    };

  };

  return (
    <div >
      <ConfirmDelete {...{ onClick: leaveOrganization, confirmModal, setConfirmModal, message: `Are you sure you want to leave ${organization.details.name}?` }} />
      <Card style={cardStyles} sx={{ display: "flex", gap: "40px" }}>
        <div >
          <img
            alt={organization.details.name}
            style={{ height: 100, width: 100, borderRadius: '50%' }}
            src={`${organization.details.logo}`}
          />
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: "flex", alignSelf: "center", marginTop: "10px" }}>
              <BusinessIcon fontSize="large" />  <Typography component="span" color={blueGrey["A700"]} variant="subtitle1" sx={{ ml: 1, alignSelf: "center" }}>{organization.details.industry}</Typography>
            </div>
            <div style={{ display: "flex", alignSelf: "center", marginTop: "10px" }}>
              <EmailIcon fontSize="large" /> <Typography component="span" color={blueGrey["A700"]} variant="subtitle1" sx={{ ml: 1, alignSelf: "center" }}>{organization.details.email}</Typography>
            </div>
            <div style={{ display: "flex", alignSelf: "center", marginTop: "10px" }}>
              <LanguageIcon fontSize="large" /> <Link href={organization.details.website} sx={{ ml: 1, alignSelf: "center", textDecoration: "none" }} color={blueGrey["A700"]} target="_blank" rel="noopener"><Typography component="span" variant="subtitle1">{organization.details.website}</Typography></Link>
            </div>
            <div style={{ display: "flex", alignSelf: "center", marginTop: "10px" }}>
              {organization.isMember && <GroupsBtn text="Leave Organization" variant="contained" onClick={() => setConfirmModal(!confirmModal)} />}
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