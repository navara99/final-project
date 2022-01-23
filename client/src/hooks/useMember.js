import { useEffect, useState } from "react";
import axios from "axios";

function useMember(id) {
  const [isMember, setIsMember] = useState();

  useEffect(() => {
    axios.get(`/api/organizations/${id}/isMember`).then(({ data }) => {
      setIsMember(data.isMember);
    });
  }, [id]);

  return isMember;

};

export default useMember;