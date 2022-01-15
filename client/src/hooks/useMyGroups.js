import { useState, useEffect } from "react";
import axios from "axios";

const useMyGroups = () => {
  const [myGroups, setMyGroups] = useState();

  useEffect(() => {
    axios.get("/api/users/me/organizations").then(({ data }) => {
      setMyGroups(data);
    });
  }, []);

  return { myGroups, setMyGroups };
};

export default useMyGroups;