import React, { useState } from "react";
import OrganizationListItem from "./OrganizationListItem";
import ExpandedOrganizationListItem from "./ExpandedOrganizationListItem";

const OrganizationList = ({
  stalls,
  fairId,
  setSnackBarDetails,
  live,
  currentUser,
  stallUserNum
}) => {
  const [expand, setExpanded] = useState();

  const elm = stalls.map((stall) => {
    const { id } = stall;
    const userNum = id in stallUserNum ? stallUserNum[id] : 0;
    if (expand === id) {
      return (
        <ExpandedOrganizationListItem
          {...{
            ...stall,
            userNum,
            key: id,
            setExpanded: () => setExpanded(id),
            fairId,
            setSnackBarDetails,
            live,
            currentUser
          }}
        />
      );
    }
    return (
      <OrganizationListItem
        {...{
          ...stall,
          key: id,
          setExpanded: () => setExpanded(id),
          fairId,
          live,
          userNum
        }}
      />
    );
  });
  return <>{elm}</>;
};

export default OrganizationList;
