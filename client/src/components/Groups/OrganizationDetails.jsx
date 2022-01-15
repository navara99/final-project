import React from "react";
import { useParams } from "react-router";
import useOrganizationDetails from "../../hooks/useOrganizationDetails";

function OrganizationDetails() {
  const { id } = useParams();
  const organization = useOrganizationDetails(id);


  return (
    <div>{id}</div>

  );
};

export default OrganizationDetails;