import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { shortenStr } from "../../helpers/string";
import { formatDate } from "../../helpers/date";

const FairListItem = ({ name, description, poster, start_time, end_time }) => {
  return (
    <Link to="/jobs">
      <Card sx={{ maxWidth: 250 }}>
        <div className="badge">{formatDate(start_time)}</div>
        <CardMedia component="img" height="200" image={poster} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortenStr(description, 120)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FairListItem;
