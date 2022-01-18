import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
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
            <div>
              <Button
                component={Link}
                to={`/organizations/${host_id}`}
                variant="contained"
                size="small"
              >
                Host Page
              </Button>
              {currentUser && (
                <Button
                  variant="contained"
                  size="small"
                  disabled={added}
                  onClick={clickHandler}
                >
                  {added ? "Added to Schedule" : "Add to Schedule"}
                </Button>
              )}
            </div>

            {currentUser && (
              <Button variant="contained" size="small" disabled={!live}>
                Join
              </Button>
            )}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Header;
