import React from "react";
import JobsList from "../Groups/JobsList";
import useJobs from "../../hooks/useJobs";
import "./jobboard.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const Jobs = () => {
  const [jobs, setJobs] = useJobs();


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
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <JobsList {...{ jobs }} />
    </div>
  );
};

export default Jobs;
