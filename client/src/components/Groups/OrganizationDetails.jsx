import React from "react";
import { useParams } from "react-router";
import useOrganizationDetails from "../../hooks/useOrganizationDetails";
import OrganizationHeader from "./OrganizationHeader";
import OrganizationJobs from "./OrganizationJobs";
import OrganizationMembers from "./OrganizationMembers";
import OrganizationFairs from "./OrganizationFairs";

const cardStyles = {
  padding: "2em",
  margin: "1em"
};

function OrganizationDetails({ setSnackBarDetails }) {
  const { id } = useParams();
  const [organization, setOrganizationDetails] = useOrganizationDetails(id);


  return (
    <div className="organization-details-wrapper">
      {organization && <OrganizationHeader {...{ organization }} {...{ cardStyles }} />}
      {organization && <OrganizationJobs {...{ organization }} {...{ setOrganizationDetails }} {...{ cardStyles }} {...{ setSnackBarDetails }} />}
      {organization && <OrganizationFairs {...{ organization }} {...{ setOrganizationDetails }} {...{ cardStyles }} {...{ setSnackBarDetails }} />}
      {organization && <OrganizationMembers {...{ organization }} {...{ setOrganizationDetails }} {...{ cardStyles }}  {...{ setSnackBarDetails }}/>}
    </div>
  );
};

export default OrganizationDetails;