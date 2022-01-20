import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "7fbb0d7a140c49ddb9a80357e303fb88";
const token =
  "0067fbb0d7a140c49ddb9a80357e303fb88IAChfSEzziXwal7i+7/nOtdI8/72i0RjIdTkhYAnV9+CnAx+f9gAAAAAEADC8VeAoyvqYQEAAQCjK+ph";
export const config = { mode: "rtc", codec: "vp8", appId, token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "test";
