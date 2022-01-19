import { useState, useEffect } from "react";
import axios from "axios";

const useApplications = (id) => {
  const [applications, setApplications] = useState();

  useEffect(() => {
    axios.get(`/api/jobs/${id}/applications`).then(({ data }) => {
      setApplications(data);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);

  return [applications, setApplications];
};

export default useApplications;