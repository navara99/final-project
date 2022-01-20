import React, { useState } from "react";
import { useClient } from "./setting";
import { Add, Button, Icon } from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Grid } from "@mui/material";

const Controls = ({ tracks, setStart, setInCall }) => {
  const client = useClient();
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Button
          variant="contained"
          onClick={() => mute("audio")}
          color={trackState.audio ? "primary" : "secondary"}
        >
          {trackState.audio ? <MicIcon /> : <MicOffIcon />}
        </Button>
        <Button
          variant="contained"
          onClick={() => mute("video")}
          color={trackState.video ? "primary" : "secondary"}
        >
          {trackState.video ? <VideocamIcon /> : <VideocamOffIcon />}
        </Button>
        <Button
          variant="contained"
          onClick={() => mute("audio")}
          color={trackState.audio ? "primary" : "secondary"}
        >
          {trackState.audio ? <MicIcon /> : <MicOffIcon />}
        </Button>
      </Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
};
