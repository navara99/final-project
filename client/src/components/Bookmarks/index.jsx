import React from "react";
import Columns from "./Columns";
import { useState } from "react";
import useFavoriteJobs from "../../hooks/useFavoriteJobs";
import JobsList from "../Groups/JobsList";
import useAppliedJobs from "../../hooks/useAppliedJobs";

function Bookmarks({ setSnackBarDetails, currentUser }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { favoriteJobs } = useFavoriteJobs();
  const { appliedJobs, updateAppliedJobs } = useAppliedJobs();

  return (
    <>
      <Columns {...{ selectedIndex, setSelectedIndex }} />
      <JobsList jobs={selectedIndex ? appliedJobs : favoriteJobs} {...{ setSnackBarDetails, currentUser, updateAppliedJobs }} />
    </>
  )
};

export default Bookmarks;