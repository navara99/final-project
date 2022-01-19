import React from "react";
import { useParams } from "react-router-dom";
import useFairDetails from "../../hooks/useFairDetails";
import Header from "./Header";
import "./Fair.css";
import OrganizationList from "./OrganizationList";

const Fair = ({ currentUser }) => {
  let { id } = useParams();
  const { fair, stalls, added, add, updateFairDetails } = useFairDetails(id);

  return (
    <div className="fair-details">
      {fair && stalls && (
        <>
          <Header {...{ fair, added, currentUser, add, id, updateFairDetails }} />
          <h3>Employers ({stalls.length})</h3>
          <OrganizationList stalls={stalls} />
        </>
      )}
    </div>
  );
};

export default Fair;
