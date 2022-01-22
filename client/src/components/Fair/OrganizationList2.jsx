import React from "react";
import OrganizationListItem from "./OrganizationListItem";

const OrganizationList = ({ stalls }) => {
  const elm = stalls.map((stall) => {
    const { id } = stall;
    return <OrganizationListItem key={id} {...stall} />;
  });
  return <>{elm}</>;
};

export default OrganizationList;
