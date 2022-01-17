import React from "react";
import { useParams } from "react-router-dom";
import useFairDetails from "../../hooks/useFairDetails";
import Header from "./Header";

const Fair = () => {
  let { id } = useParams();
  const { fair, stalls } = useFairDetails(id);

  return (
    <>
      {fair && (
        <>
          <Header fair={fair} />
        </>
      )}
    </>
  );
};

export default Fair;
