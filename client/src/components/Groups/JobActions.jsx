import React from "react";
import GroupsBtn from "./GroupsBtn";
import JobApplicationForm from "./JobApplicationForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";

function JobActions({ job, isMember, setSnackBarDetails, currentUser, isApplied, setApplied, like, setLike }) {
  const [openApplicationForm, setOpenApplicationForm] = useState(false);

  const likeToggle = async () => {

    try {
      axios.post(`api/jobs/${job.id}/like`);
      setLike(!like);
    } catch (err) {
      console.log(err.message);
    }

  };

  return (
    <div className="job-actions-wrapper">
      <JobApplicationForm {...{ job }} {...{ openApplicationForm }} {...{ setOpenApplicationForm }} {...{ setSnackBarDetails }} currentUser={currentUser} setApplied={setApplied} />
      {!isMember && <GroupsBtn text={!isApplied ? "Apply" : "Applied"} onClick={() => setOpenApplicationForm(!openApplicationForm)} deActive={isApplied} />}
      {isMember && <Link to={`/jobs/${job.id}/applications`} style={{ textDecoration: "none" }}><GroupsBtn text={`View Applications (${job.applications.length})`} /></Link>}
      {!isMember &&
        <IconButton
          style={{ position: "absolute", top: "0.5em", right: "0.5em" }}
          onClick={likeToggle}>
          {like ?
            <FavoriteIcon style={{ color: "red" }} fontSize="large" /> :
            <FavoriteBorderIcon fontSize="large" />}
        </IconButton>}
    </div>
  )

};

export default JobActions;
