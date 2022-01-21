import { useState, useEffect } from "react";
import { createClient } from "agora-rtc-react";
import axios from "axios";

// const appId = "7fbb0d7a140c49ddb9a80357e303fb88";
// const token =
//   "0067fbb0d7a140c49ddb9a80357e303fb88IADzfdTTKHiOtSDB1lk74zgZsIRa/XjDr2IJqyFGjuiJ9Ax+f9gAAAAAEADC8VeAX+bqYQEAAQBe5uph";
// export const config = { mode: "rtc", codec: "vp8", appId, token };
// export const useClient = createClient(config);
// export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
// export const channelName = "test";

const appId = "7fbb0d7a140c49ddb9a80357e303fb88";

export default function useVideoSettings(name, currentUser) {
  const [token, setToken] = useState();

  useEffect(() => {

    if (currentUser) {
      axios.get(`/api/token?channelName=${name}&uid=${currentUser.username}`).then(({ data }) => {
        setToken(data.token);
      });
    }

  }, [currentUser]);

  const config = { mode: "rtc", codec: "vp8", appId, token };
  const useClient = createClient(config);

  return { config, useClient }

};
