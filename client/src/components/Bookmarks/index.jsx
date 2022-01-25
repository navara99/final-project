import React from "react";
import Columns from "./Columns";
import { useState } from "react";
import useFavoriteJobs from "../../hooks/useFavoriteJobs";
import JobsList from "../Groups/JobsList";

function Bookmarks() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { favoriteJobs, setFavoriteJobs } = useFavoriteJobs();

  return (
    <>
      <Columns {...{ selectedIndex, setSelectedIndex }} />
      {selectedIndex === 0 && <JobsList jobs={favoriteJobs} />}
    </>
  )
};

export default Bookmarks;