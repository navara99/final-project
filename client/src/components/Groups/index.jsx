import React from "react";
import {
  List,
  ListItemText,
  Button,
  Card
} from "@mui/material";
import GroupAction from "./GroupAction";
import { Add } from "@mui/icons-material";
import "./groups.css";

function Groups() {

  const cardStyles = {
    padding: "2em",
    margin: "1em"
  };

  const dummyDescription = "aliquet ultricies. Mauris vitae tempus odio, eget pellentesque neque. porta aliquam et id purus. Maecenas magna lorem, imperdiet at ex viverra, luctus fringilla odio. Ut a lectus dui. Nulla facilisi. Curabitur at rutrum tortor, mattis finibus turpis. Phasellus suscipit orci a justo aliquam, ut ornare leo commodo."

  return (
    <div className="groups-container">
      <div className="organization-header">
        <h1>Your Organizations</h1>
        <Button variant="contained" startIcon={<Add />}>Add Organization</Button>
      </div>
      <List sx={{ width: '90%', paddingTop: "2em" }}>
        <Card style={cardStyles} alignItems="flex-start">
          <ListItemText
            primary={<h3 className="organization-card-name">Some Organization Name</h3>}
            secondary={dummyDescription}
          />
          <GroupAction />
        </Card>
      </List>
    </div>
  )
}

export default Groups;