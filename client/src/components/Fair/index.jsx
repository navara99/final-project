import React from "react";
import { useParams } from "react-router-dom";
import useFairDetails from "../../hooks/useFairDetails";
import HeaderLive from "./HeaderLive";
import Header from "./Header";
import "./Fair.css";
import OrganizationList from "./OrganizationList";
import useTitle from "../../hooks/useTitle";

const Fair = ({ currentUser, setSnackBarDetails }) => {
  let { id } = useParams();
  const { fair, stalls, added, add, updateFairDetails } = useFairDetails(id);
  const title = stalls && fair.live ? "Stalls" : "Employers";
  const tabTitle = fair
    ? (fair.live ? "LIVE NOW! " : "") +
      fair.name +
      " • Hosted by " +
      fair.host_name
    : "";
    
  useTitle(tabTitle);

  return (
    <div className="live">
      {fair && fair.live && (
        <HeaderLive
          {...{ fair, added, currentUser, add, id, updateFairDetails }}
        />
      )}
      {fair && !fair.live && (
        <Header
          {...{
            fair,
            added,
            currentUser,
            add,
            id,
            updateFairDetails,
            setSnackBarDetails,
          }}
        />
      )}
      {stalls && (
        <>
          <h3>
            {title} ({stalls.length})
          </h3>
          <OrganizationList
            stalls={stalls}
            fairId={id}
            setSnackBarDetails={setSnackBarDetails}
            live={fair.live}
            currentUser={currentUser}
          />
        </>
      )}
    </div>
  );
};

export default Fair;
