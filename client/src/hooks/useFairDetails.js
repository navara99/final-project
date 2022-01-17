import { useState, useEffect } from "react";
import axios from "axios";

const useFairDetails = (id) => {
  const [organizations, setOrganizations] = useState();
  const [fair, setFair] = useState();
  useEffect(() => {
    axios.get(`/api/fairs/${id}`).then(({ data }) => {
      const { organizations, fair } = data;
      setFair(fair);
      setOrganizations(organizations);
    });
  }, []);

  return { organizations, fair };
};

export default useFairDetails;
