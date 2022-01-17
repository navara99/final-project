import React from "react";
import { useParams } from "react-router-dom";
import useFairDetails from "../../hooks/useFairDetails";
import Header from "./Header";
import "./Fair.css";

const Fair = () => {
  let { id } = useParams();
  const { fair, stalls } = useFairDetails(id);

  return (
    <div className="fair-details">
      {fair && (
        <>
          <Header fair={fair} />
        </>
      )}
    </div>
  );
};

export default Fair;
