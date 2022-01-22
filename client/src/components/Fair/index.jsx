import React from "react";
import { useParams } from "react-router-dom";
import useFairDetails from "../../hooks/useFairDetails";
import HeaderLive from "./HeaderLive";
import Header from "./Header";
import "./FairLobby.css";
import OrganizationList from "./OrganizationList";
import { fairListSettings } from "../../constants";

const Fair = ({ currentUser, setSnackBarDetails }) => {
  let { id } = useParams();
  const { fair, stalls, added, add, updateFairDetails } = useFairDetails(id);
  const title = stalls && fair.live ? "Stalls" : "Employers"
  return (
    <div className="live">
      {fair && fair.live && (
        <HeaderLive
          {...{ fair, added, currentUser, add, id, updateFairDetails }}
        />
      )}
      {fair && !fair.live && (
        <Header {...{ fair, added, currentUser, add, id, updateFairDetails }} />
      )}
      {stalls && (
        <>
          <h3>{title} ({stalls.length})</h3>
          <OrganizationList
            stalls={stalls}
            fairId={id}
            setSnackBarDetails={setSnackBarDetails}
          />
        </>
      )}
    </div>
  );
};

export default Fair;
