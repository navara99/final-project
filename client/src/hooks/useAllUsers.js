import { useEffect, useState } from "react"
import axios from "axios";

const useAllUsers = () => {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    axios.get("/api/users").then(({ data }) => {
      setAllUsers(data);
    });
  }, []);

  return allUsers;
};

export default useAllUsers;