import { useState, useEffect } from "react";
import axios from "axios";

const useMyGroups = () => {
  const [myGroups, setMyGroups] = useState();

  useEffect(() => {
    axios.get("/api/users/me/organizations").then(({ data }) => {
      console.log(data);
      setMyGroups(data);
    });
  }, []);

  useEffect(() => {
    console.log(myGroups);
  }, [myGroups])

  return { myGroups, setMyGroups };
};


export default useMyGroups;