import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "./Controls";
import Video from "./Video";
import { createMicrophoneAndCameraTracks } from "agora-rtc-react";

const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export default function VideoCall(props) {
  const { setInCall, config, useClient, username, channelName } = props;
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  useEffect(() => {
    let init = async (name) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });

      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
          if (user.audioTrack) user.audioTrack.stop();
        }
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });
      console.log(username);
      try {
        const result = await client.join(config.appId, name, config.token, username);
        console.log("JOINED")
      } catch (error) {
        console.log(error.message);
      }

      try {
        if (tracks) await client.publish([tracks[0], tracks[1]]);
      } catch (err) {
        console.log(err.message);
      }


      setStart(true);
    };

    if (ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }
    }
  }, [ready, tracks, channelName, client]);

  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      {/* <Grid item style={{ height: "5%" }}>
        {ready && tracks && (
          <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} {...{ useClient }} />
        )}
      </Grid> */}
      <Grid item style={{ height: "95%" }}>
        {start && tracks && <Video ready={ready} tracks={tracks} setStart={setStart} setInCall={setInCall} users={users} username={username} {...{ useClient }} />}
      </Grid>
    </Grid>
  );
}
