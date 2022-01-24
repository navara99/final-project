import { useState, useEffect } from "react";
import axios from "axios";

const useInterview = (id) => {
  const [interview, setInterview] = useState();

  useEffect(() => {
    axios.get(`/api/interviews/${id}`).then(({ data }) => setInterview(data));
  }, [id]);

  return [interview, setInterview];
}

export default useInterview;