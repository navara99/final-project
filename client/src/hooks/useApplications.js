import { useState, useEffect } from "react";
import axios from "axios";

const useApplications = (id) => {
  const [applications, setApplications] = useState();


  useEffect(() => {
    axios.get(`/applications/${id}`).then(({ data }) => {
      setApplications(data);
    });
  }, []);

  return [applications, setApplications];
};

export default useApplications;