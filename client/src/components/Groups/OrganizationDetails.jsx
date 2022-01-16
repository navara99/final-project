import React from "react";
import { useParams } from "react-router";
import useOrganizationDetails from "../../hooks/useOrganizationDetails";
import OrganizationHeader from "./OrganizationHeader";
import OrganizationJobs from "./OrganizationJobs";

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
      {organization && <OrganizationHeader {...{ organization }} {...{cardStyles}} />}
      {organization && <OrganizationJobs {...{ organization }} {...{cardStyles}}/>}
    </>

  );
};

export default OrganizationDetails;