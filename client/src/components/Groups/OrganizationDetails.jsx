import React from "react";
import { useParams } from "react-router";

function OrganizationDetails() {
  const { id } = useParams();

  return (
    <div>{id}</div>

  );
};

export default OrganizationDetails;