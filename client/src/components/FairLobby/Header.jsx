import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ScheduleButton from "./ScheduleButton";
import JoinButton from "./JoinButton";
import { formatStartEndTime, formatDate } from "../../helpers/date";

const Header = ({ id, fair, added, currentUser, add, updateFairDetails }) => {
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

  return (
    <>
      {fair && (
        <Card>
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
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Header;
