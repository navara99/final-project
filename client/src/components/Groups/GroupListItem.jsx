import React from "react";
import { ListItemText, Card } from "@mui/material";
import GroupAction from "./GroupAction";

function GroupListItem() {

  const cardStyles = {
    padding: "2em",
    margin: "1em"
  };

  const dummyDescription = "aliquet ultricies. Mauris vitae tempus odio, eget pellentesque neque. porta aliquam et id purus. Maecenas magna lorem, imperdiet at ex viverra, luctus fringilla odio. Ut a lectus dui. Nulla facilisi. Curabitur at rutrum tortor, mattis finibus turpis. Phasellus suscipit orci a justo aliquam, ut ornare leo commodo."

  return (
    <Card style={cardStyles} alignItems="flex-start">
      <ListItemText
        primary={<h3 className="organization-card-name">Some Organization Name</h3>}
        secondary={dummyDescription}
      />
      <GroupAction />
    </Card>
  )
};

export default GroupListItem;