import React from "react";
import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

export default function Video(props) {
  const { users, tracks, username } = props;
  const [gridSpacing, setGridSpacing] = useState(12);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  }, [users, tracks]);

  const otherUsers = () => {
    return users.map((user) => {
      if (user.videoTrack) {
        return (
          <Grid item xs={gridSpacing} key={user.uid} className="video-grid-item" >
            <p className="video-username"></p>
            <AgoraVideoPlayer
              videoTrack={user.videoTrack}
              key={user.uid}
              style={{ height: "100%", width: "100%" }}
            > {user.uid}</AgoraVideoPlayer >
          </Grid>
        );
      } else {
        return null;
      };
    })
  };

  return (
    <Grid container style={{ height: "100%" }} >
      <Grid item xs={gridSpacing} className="video-grid-item">
        <p className="video-username">{username}</p>
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%" }}
        />
      </Grid>
      {users.length > 0 && otherUsers()}
    </Grid>
  );
}
