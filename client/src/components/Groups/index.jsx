import React from "react";
import {
  List,
  ListItemText,
  Typography,
  Button,
  Card
} from "@mui/material";
import GroupAction from "./GroupAction";
import "./groups.css";

function Groups() {

  const cardStyles = {
    padding: "2em",
    margin: "1em"
  };

  return (
    <div className="groups-container">
      <div className="organization-header">
        <Typography><h2>Your Organizations</h2></Typography>
        <Button variant="contained">Add Organization</Button>
      </div>
      <List sx={{ width: '90%', paddingTop: "2em" }}>
        <Card style={cardStyles} alignItems="flex-start">
          <ListItemText
            primary="Some Organization"
            secondary={
              <React.Fragment>
                {"aliquet ultricies. Mauris vitae tempus odio, eget pellentesque neque. Donec in dolor ac est porta aliquam et id purus. Maecenas magna lorem, imperdiet at ex viverra, luctus fringilla odio. Ut a lectus dui. Nulla facilisi. Curabitur at rutrum tortor, mattis finibus turpis. Phasellus suscipit orci a justo aliquam, ut ornare leo commodo."}
              </React.Fragment>
            }
          />
          <GroupAction />
        </Card>
        <Card style={cardStyles} alignItems="flex-start">
          <ListItemText
            primary="Some Other Organization"
            secondary={
              <React.Fragment>
                {"luctus fringilla odio. Ut a lectus dui. Nulla facilisi. Curabitur at rutrum tortor, mattis finibus turpis. Phasellus suscipit orci a justo aliquam, ut ornare leo commodo."}
              </React.Fragment>
            }
          />
        </Card>
      </List>
    </div>
  )
}

export default Groups;