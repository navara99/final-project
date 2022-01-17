import { useState, useEffect } from "react";
import axios from "axios";

const useFairDetails = (id) => {
  const [stalls, setStalls] = useState();
  const [fair, setFair] = useState();
  useEffect(() => {
    axios.get(`/api/fairs/${id}`).then(({ data }) => {
      const { stalls, fair } = data;
      setFair(fair);
      setStalls(stalls);
      console.log(fair)
      console.log(stalls)
    });
  }, []);

  return { stalls, fair };
};

export default useFairDetails;
