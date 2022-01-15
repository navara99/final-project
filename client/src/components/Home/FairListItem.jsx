import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { formatDate } from "../../helpers/date";

const FairListItem = ({
  id,
  name,
  description,
  poster,
  start_time,
  end_time,
  showDate,
}) => {
  return (
    <Link to={`fairs/${id}`}>
      <Card sx={{ maxWidth: 250 }}>
        {showDate && <div className="badge">{formatDate(start_time)}</div>}
        <div className="title">
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
        </div>
        <CardMedia component="img" height="250" image={poster} alt={name} />
        <CardContent>
          <div className="content">
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FairListItem;
