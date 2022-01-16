import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

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
      navigate("/");
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
