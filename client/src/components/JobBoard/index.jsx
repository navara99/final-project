import React from "react";
import JobsList from "../Groups/JobsList";
import useJobs from "../../hooks/useJobs";
import "./jobboard.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";

const Jobs = ({ setSnackBarDetails }) => {
  const [jobs, setJobs] = useJobs();

  const handleSearch = (e) => {
    const search = e.target.value;
    axios.get(`/api/jobs/${search}`).then(({ data }) => {
      setJobs(data);
    });

  };

  return (
    <div className="job-board-wrapper">
      <h2>Job Board</h2>
      <Paper
        component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Jobs"
          inputProps={{ 'aria-label': 'search jobs' }}
          onChange={handleSearch}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <JobsList {...{ jobs }}  {...{ setSnackBarDetails }} />
    </div>
  );
};

export default Jobs;
