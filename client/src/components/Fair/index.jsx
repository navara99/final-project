import React from "react";
import { useParams } from "react-router-dom";
import useFairDetails from "../../hooks/useFairDetails";

const Fair = () => {
  let { id } = useParams();
  const { fair, organizations } = useFairDetails(id);

  return (
    <>
      {fair && (
        <>
        </>
      )}
    </>
  );
};

export default Fair;
