import React from "react";
import { useParams } from "react-router";
import useOrganizationDetails from "../../hooks/useOrganizationDetails";
import OrganizationHeader from "./OrganizationHeader";
import OrganizationJobs from "./OrganizationJobs";
import OrganizationMembers from "./OrganizationMembers";
import OrganizationFairs from "./OrganizationFairs";

const cardStyles = {
  padding: "2em",
  margin: "1em",
  borderRadius: '10px',
  boxShadow: '1px 1px 6px 1px rgba(0,0,0,0.3)'
};

function OrganizationDetails({ setSnackBarDetails }) {
  const { id } = useParams();
  const [organization, setOrganizationDetails] = useOrganizationDetails(id);

  console.log(organization);

  return (
    <div className="organization-details-wrapper" style={{width:'100%', backgroundColor:"#eff2f6"}}>
      {organization && <OrganizationHeader {...{ organization }} {...{ cardStyles }} />}
      <div style={{display:"flex", justifyContent:"space-between"}}>
        {organization && <OrganizationJobs {...{ organization }} {...{ setOrganizationDetails }} {...{ cardStyles }} {...{ setSnackBarDetails }} />}
        {organization && <OrganizationFairs {...{ organization }} {...{ setOrganizationDetails }} {...{ cardStyles }} {...{ setSnackBarDetails }} />}
      </div>
      {organization && <OrganizationMembers {...{ organization }} {...{ setOrganizationDetails }} {...{ cardStyles }}  {...{ setSnackBarDetails }} />}
    </div>
  );
};

export default OrganizationDetails;