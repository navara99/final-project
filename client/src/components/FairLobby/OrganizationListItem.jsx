import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";

const OrganizationListItem = ({
  setExpanded,
  id,
  website,
  industry,
  description,
  fairId,
  name,
}) => {
  const clickHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <Box onClick={setExpanded}>
      <Card variant="outlined" className="not-expanded">
        <CardMedia
          component="img"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt={name + "_logo"}
        />
        <CardContent>
          <div className="organization-details">
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <CardActions>
              <Link to={`/live/${fairId}/${id}`}>
                <Button size="small" onClick={clickHandler} variant="outlined">
                  Join this stall
                </Button>
              </Link>
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrganizationListItem;
