import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const OrganizationListItem = ({ id, website, industry, description, name }) => {
  return (
    <Box>
      <Card variant="outlined">
        <CardMedia
          component="img"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt={name + "_logo"}
        />
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
              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography> */}
            </div>
            <div>
              <CardActions>
                {website && (
                  <Button
                    size="small"
                    target="_blank"
                    component={Link}
                    to={website}
                  >
                    Website
                  </Button>
                )}
                <Button
                  size="small"
                  component={Link}
                  to={`/organizations/${id}`}
                  target="_blank"
                >
                  Details
                </Button>
                <Button size="small" variant="outlined">
                  Join this stall
                </Button>
              </CardActions>
            </div>
          </div>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrganizationListItem;
