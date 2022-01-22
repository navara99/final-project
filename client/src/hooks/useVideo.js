import { useEffect, useState } from "react";

const useVideo = (ready, tracks, config, channelName, client, username) => {
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);

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

      try {
        await client.join(config.appId, name, config.token, username);
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

  return { users, setUsers, start, setStart }
};

export default useVideo;