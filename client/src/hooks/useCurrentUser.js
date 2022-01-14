import { useState, useEffect } from "react";
import axios from "axios";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    axios.get("/api/users/me").then(({ data }) => {
      const keys = Object.keys(data);
      const loggedIn = keys.length > 0;
      if (loggedIn) setCurrentUser(data);
    });
  }, []);

  const logout = async () => {
    try {
      await axios.post("/api/users/logout");
      setCurrentUser();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser])

  return { currentUser, setCurrentUser, logout };
};

export default useCurrentUser;
