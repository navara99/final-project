import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoCall from "./VideoCall";
import { Button } from "@mui/material";
import "./Stall.css";

const Stall = ({ currentUser }) => {
  let { fairId, organizationId } = useParams();
  const [inCall, setInCall] = useState(false);
  console.log(fairId, organizationId);
  
  return (
    <div class="stall">
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
