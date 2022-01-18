import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
import ScheduleButton from "./ScheduleButton";
import { formatStartEndTime, formatDate } from "../../helpers/date";

const Header = ({ id, fair, added, currentUser, add }) => {
  const {
    name,
    description,
    poster,
    host_id,
    host_name,
    host_description,
    start_time,
    end_time,
    live,
    upcoming,
  } = fair;

  const clickHandler = () => {
    axios.post(`/api/fairs/join/${id}`).then(() => {
      add();
    });
  };

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
            <Button
              component={Link}
              to={`/organizations/${host_id}`}
              variant="contained"
              size="small"
            >
              Host Details
            </Button>

            {currentUser && (
              <div>
                <ScheduleButton />
                <Button
                  variant="contained"
                  disabled={added}
                  onClick={clickHandler}
                  disabled={!upcoming || added}
                >
                  {added ? "Added to Schedule" : "Add to Schedule"}
                </Button>
                <Button variant="contained" disabled={!live}>
                  Join
                </Button>
              </div>
            )}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Header;
