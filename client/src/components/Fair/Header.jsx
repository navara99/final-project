import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { formatStartEndTime, formatDate } from "../../helpers/date";

const Header = ({ fair, added, currentUser }) => {
  const {
    name,
    description,
    poster,
    host_id,
    host_name,
    host_description,
    start_time,
    end_time,
  } = fair;

  return (
    <>
      {fair && (
        <Card>
          <CardMedia
            component="img"
            height="350"
            image={poster}
            alt="fair poster"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date: {formatDate(start_time)}
              <br />
              Time: {formatStartEndTime(start_time, end_time)}
              <br />
              {description}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              About the host: {host_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {host_description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/organizations/${host_id}`}>
              <Button variant="contained" size="small">
                Host Page
              </Button>
            </Link>
            {currentUser && (
              <Button variant="contained" size="small">
                Add to Schedule
              </Button>
            )}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Header;
