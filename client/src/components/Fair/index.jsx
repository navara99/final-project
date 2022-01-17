import React from "react";
import { useParams } from "react-router-dom";
import useFairDetails from "../../hooks/useFairDetails";
import Header from "./Header";
import "./Fair.css";

const Fair = ({ currentUser }) => {
  let { id } = useParams();
  const { fair, stalls, added, add } = useFairDetails(id);

  return (
    <div className="fair-details">
      {fair && stalls && (
        <>
          <Header {...{ fair, added, currentUser, add, id }} />
          <h3>Employers ({stalls.length})</h3>
        </>
      )}
    </div>
  );
};

export default Fair;
