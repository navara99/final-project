import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Header = ({ fair }) => {
  const { name, description, poster, host_id, host_name, host_description } =
    fair;
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
            <Button size="small">Host Page</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Header;
