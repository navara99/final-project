import React from "react";
import { useParams } from "react-router";
import useOrganizationDetails from "../../hooks/useOrganizationDetails";
import OrganizationHeader from "./OrganizationHeader";
import OrganizationJobs from "./OrganizationJobs";
import OrganizationMembers from "./OrganizationMembers";

const cardStyles = {
  padding: "2em",
  margin: "1em"
};

function OrganizationDetails({ setSnackBarDetails }) {
  const { id } = useParams();
  const organization = useOrganizationDetails(id);

  console.log(organization);
  return (
    <div className="organization-details-wrapper">
      <div className="organization-details-left-wrapper">
        {organization && <OrganizationHeader {...{ organization }} {...{ cardStyles }} />}
        {organization && <OrganizationMembers {...{ organization }} {...{ cardStyles }} {...{ setSnackBarDetails }} />}
      </div>
      {organization && <OrganizationJobs {...{ organization }} {...{ cardStyles }} {...{ setSnackBarDetails }} />}

    </div>

  );
};

export default OrganizationDetails;