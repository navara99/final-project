import { useState, useEffect } from "react";
import axios from "axios";

const useFavoriteJobs = () => {
  const [favoriteJobs, setFavoriteJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs/favorite").then(({ data }) => {
      setFavoriteJobs(data);
    });
  }, []);

  return { favoriteJobs, setFavoriteJobs };

};

export default useFavoriteJobs;