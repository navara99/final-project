import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import useOrganizationJobs from "../../hooks/useOrganizationJobs";
import JobList from "./JobList";
import JobDetailsDialog from "./JobDetailsDialog";
import JobApplicationForm from "../Groups/JobApplicationForm";

const ExpandedOrganizationListItem = ({
  setExpanded,
  id,
  website,
  industry,
  description,
  name,
  fairId,
  setSnackBarDetails,
  live,
  currentUser,
  logo,
  userNum
}) => {
  const jobs = useOrganizationJobs(id);
  const [jobDetailsOpen, setJobDetailsOpen] = useState(false);
  const [openApplicationForm, setOpenApplicationForm] = useState(false);
  const [jobId, setJobId] = useState();
  const jobInfo = jobs.find((job) => job.id === jobId);
  return (
    <Box onClick={setExpanded} className="stall-list">
      <JobDetailsDialog
        {...{ jobDetailsOpen, setJobDetailsOpen, job: jobInfo }}
      />
      <JobApplicationForm
        {...{
          openApplicationForm,
          setOpenApplicationForm,
          setSnackBarDetails,
          job: jobInfo,
          setApplied: () => {},
          currentUser,
        }}
      />
      <Card variant="outlined">
        <CardMedia component="img" image={logo} alt={name + "_logo"} />
        <CardContent>
          <div className="organization-details">
            <div>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {industry}
              </Typography>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
            </div>
            <div>
              <CardActions>
                {website && (
                  <a target="_blank" href={website} rel="noopener noreferrer">
                    <Button size="small">Website</Button>
                  </a>
                )}
                <Button
                  size="small"
                  component={Link}
                  to={`/organizations/${id}`}
                  target="_blank"
                >
                  Details
                </Button>
                {live && (
                  <Link to={`/live/${fairId}/${id}`} target="_blank">
                    <Button size="small" variant="outlined">
                      Join this stall ({userNum})
                    </Button>
                  </Link>
                )}
              </CardActions>
            </div>
          </div>
          <Typography variant="body2">{description}</Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Job vacancies ({jobs.length})
          </Typography>
          <JobList
            {...{ jobs, setJobId, setJobDetailsOpen, setOpenApplicationForm }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExpandedOrganizationListItem;
