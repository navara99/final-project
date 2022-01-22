import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoCall from "./VideoCall";
import { Button } from "@mui/material";
import useChannel from "../../hooks/useChannel";
import "./Stall.css";

const Stall = ({ currentUser }) => {
  let { fairId, organizationId } = useParams();
  const { config, useClient } = useChannel(organizationId, currentUser ? currentUser.username : "");
  const [inCall, setInCall] = useState(false);

  return (
    <div className="stall">
      {!inCall && < Button variant="contained" color="primary" onClick={() => setInCall(true)}>Join Stall</Button>}
      {inCall && <VideoCall setInCall={setInCall} {...{ config, useClient }} channelName={organizationId} username={currentUser.username} />}
    </div >
  );
};

export default Stall;
