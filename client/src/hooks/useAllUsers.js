import { useEffect } from "react"
import axios from "axios";

const useAllUsers = () => {
  let allUsers;

  useEffect(() => {
    axios.get("/api/users").then(({ data }) => {
      allUsers = data;
    });
  }, []);

  return allUsers;
};

export default useAllUsers;