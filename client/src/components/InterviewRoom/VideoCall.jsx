import React from "react";
import { Grid } from "@mui/material";
import Video from "../Stall/Video";
import { createMicrophoneAndCameraTracks } from "agora-rtc-react";
import useVideo from "../../hooks/useVideo";

const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

function VideoCall({ setInCall, config, useClient, currentUser, channelName, interview }) {
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  const { users, start, setStart } = useVideo(ready, tracks, config, channelName, client, currentUser.username);

  return (
    <>
      <Grid container direction="column" style={{ height: "100%" }}>
        <Grid item style={{ height: "95%" }}>
          {start && tracks && <Video {...{ interview, ready, tracks, setStart, setInCall, users, useClient }} username={currentUser.username} />}
        </Grid>
      </Grid>
    </>
  )
}

export default VideoCall;