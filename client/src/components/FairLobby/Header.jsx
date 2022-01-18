import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
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
        <Box>
          <Card variant="outlined">
            <CardMedia
              component="img"
              height="150"
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
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Header;
