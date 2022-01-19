import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "7fbb0d7a140c49ddb9a80357e303fb88";
const token =
  "0067fbb0d7a140c49ddb9a80357e303fb88IABVV64yM7QxBFn/I3gzM/YK82mB5BcGzjA/llWN66SSVjLRTXgAAAAAEADC8VeAR8HpYQEAAQBHwelh";

export const config = { mode: "rtc", codec: "vp8", appId, token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "test";