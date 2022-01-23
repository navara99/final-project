import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { formatDate } from "../../helpers/date";
import { onGoingMediaHeight, otherMediaHeight } from "../../constants";

const FairListItem = ({
  id,
  name,
  description,
  poster,
  start,
  showDate,
  isOngoing,
}) => {
  const height = isOngoing ? onGoingMediaHeight : otherMediaHeight;
  const formattedDate = formatDate(start);

  return (
    <div>
      <Link to={`/fairs/${id}`}>
        <Card>
          {showDate && <div className="badge">{formattedDate}</div>}
          <div className="title">
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
          </div>
          <CardMedia
            component="img"
            height={height}
            image={poster}
            alt={name}
          />
          <CardContent>
            <div className="content">
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default FairListItem;
