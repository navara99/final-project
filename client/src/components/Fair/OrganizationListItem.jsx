import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const OrganizationListItem = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardMedia
          component="img"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <div className="organization-details">
            <div>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                industry
              </Typography>
              <Typography variant="h5" component="div">
                name
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
            </div>
            <div>
              <CardActions>
                <Button size="small">Website</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </div>
          </div>
          <Typography variant="body2">
            description description description description description
            description description description description
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrganizationListItem;
