import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoCall from "./VideoCall";
import { Button } from "@mui/material";

const Stall = ({ currentUser }) => {
  let { fairId, organizationId } = useParams();
  const [inCall, setInCall] = useState(false);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setInCall(true)}
      >
        Join stall
      </Button>
      {inCall ? <VideoCall setInCall={setInCall} /> : "waiting to join call!"}
    </div>
  );
};

export default Stall;
