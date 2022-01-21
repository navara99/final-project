import { useState, useEffect } from "react";
import axios from "axios";

const useFairDetails = (id) => {
  const [stalls, setStalls] = useState();
  const [fair, setFair] = useState();
  const [added, setAdded] = useState();

  const updateFairDetails = () => {
    axios.get(`/api/fairs/${id}`).then(({ data }) => {
      const { stalls, fair, added } = data;
      setFair(fair);
      setStalls(stalls);
      setAdded(added);
    });
  };

  useEffect(() => updateFairDetails(), [updateFairDetails]);

  const add = () => setAdded(true);

  return { stalls, fair, add, added, updateFairDetails };
};

export default useFairDetails;
