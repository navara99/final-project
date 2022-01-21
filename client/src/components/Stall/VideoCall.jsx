import React from "react";
import { Grid } from "@mui/material";
import Video from "./Video";
import { createMicrophoneAndCameraTracks } from "agora-rtc-react";
import useVideo from "../../hooks/useVideo";

const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export default function VideoCall(props) {
  const { setInCall, config, useClient, username, channelName } = props;
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  const { users, start, setStart } = useVideo(ready, tracks, config, channelName, client, username);

  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Grid item style={{ height: "95%" }}>
        {start && tracks && <Video ready={ready} tracks={tracks} setStart={setStart} setInCall={setInCall} users={users} username={username} {...{ useClient }} />}
      </Grid>
    </Grid>
  );
}
