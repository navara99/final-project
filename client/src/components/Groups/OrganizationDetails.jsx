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

function OrganizationDetails() {
  const { id } = useParams();
  const organization = useOrganizationDetails(id);

  console.log(organization);
  return (
    <>
      {organization && <OrganizationHeader {...{ organization }} {...{ cardStyles }} />}
      {organization && <OrganizationJobs {...{ organization }} {...{ cardStyles }} />}
      {organization && <OrganizationMembers {...{ organization }} {...{ cardStyles }} />}
    </>

  );
};

export default OrganizationDetails;