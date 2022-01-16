import React from "react";
import { useParams } from "react-router";
import useOrganizationDetails from "../../hooks/useOrganizationDetails";
import OrganizationHeader from "./OrganizationHeader";

function OrganizationDetails() {
  const { id } = useParams();
  const organization = useOrganizationDetails(id);

  console.log(organization);
  return (
    <>
      {organization && <OrganizationHeader {...{ organization }} />}
    </>

  );
};

export default OrganizationDetails;