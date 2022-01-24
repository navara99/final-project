import React from "react";
import GroupsBtn from "./GroupsBtn";
import JobApplicationForm from "./JobApplicationForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";

function JobActions({ job, isMember, setSnackBarDetails, currentUser, isApplied, setApplied }) {
  const [openApplicationForm, setOpenApplicationForm] = useState(false);

  const likeToggle = async () => {

    try {
      axios.post(`api/jobs/${job.id}/like`);
    } catch (err) {
      console.log(err.message);
    }

  };
  console.log(job);
  return (
    <>
      <JobApplicationForm {...{ job }} {...{ openApplicationForm }} {...{ setOpenApplicationForm }} {...{ setSnackBarDetails }} currentUser={currentUser} setApplied={setApplied} />
      {!isMember && <GroupsBtn text={!isApplied ? "Apply" : "Applied"} onClick={() => setOpenApplicationForm(!openApplicationForm)} deActive={isApplied} />}
      {isMember && <Link to={`/jobs/${job.id}/applications`} style={{ textDecoration: "none" }}><GroupsBtn text={`View Applications (${job.applications.length})`} /></Link>}
      {!isMember && <IconButton onClick={likeToggle}>{job.liked ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}</IconButton>}
    </>
  )

};

export default JobActions;
