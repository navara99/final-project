import React, { useState, useEffect } from "react";
import {
  config,
  useClient,
  useMicrophoneAndCameraTracks,
  channelName,
} from "./setting";
import { Grid } from "@mui/material";
import Controls from "./Controls";
import Video from "./Video";

const VideoCall = ({ setInCall }) => {
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  useEffect(() => {
    let init = async (name) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prev) => [...prev, user]);
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });

      client.on("user-unpublished", async (user, mediaType) => {
        if (mediaType === "video") {
          setUsers((prev) => prev.filter((User) => User.uid !== user.uid));
        }
        if (mediaType === "audio") {
          if (user.audtioTrack) user.audioTrack.stop();
        }
      });

      client.on("user-left", (user) => {
        setUsers((prev) => prev.filter((User) => User.uid !== user.uid));
      });

      try {
        await client.join(config.appId, name, config.token, null);
      } catch (e) {
        console.log(e);
      }

      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };

    if (ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }
    }
  }, [channelName, client, ready, tracks]);

  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Grid item style={{ height: "5%" }}>
        {ready && tracks && (
          <Controls tracks={tracks} setStart={start} setInCall={setInCall} />
        )}
      </Grid>
      <Grid item style={{ height: "95%" }}>
        {start && tracks && <Video tracks={tracks} users={users} />}
      </Grid>
    </Grid>
  );
};

export default VideoCall;
