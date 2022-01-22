import React, { useState } from "react";
import OrganizationListItem from "./OrganizationListItem";
import ExpandedOrganizationListItem from "./ExpandedOrganizationListItem";

const OrganizationList = ({ stalls, fairId }) => {
  const [expand, setExpanded] = useState();

  const elm = stalls.map((stall) => {
    const { id } = stall;
    if (expand === id) {
      return (
        <ExpandedOrganizationListItem
          {...{ ...stall, key: id, setExpanded: () => setExpanded(id) }}
        />
      );
    }
    return (
      <OrganizationListItem
        {...{ ...stall, key: id, setExpanded: () => setExpanded(id), fairId }}
      />
    );
  });
  return <>{elm}</>;
};

export default OrganizationList;
