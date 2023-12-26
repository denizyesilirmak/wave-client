import useAgoraStore from "@/store/agora.store";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

type ClientConfigType = {
  mode: "live" | "rtc";
  codec: "vp8" | "h264";
};

const clientConfig: ClientConfigType = {
  mode: "rtc",
  codec: "vp8",
};

const appID = useAgoraStore.getState().agoraAppId;
const channel = useAgoraStore.getState().agoraChannel;
const token = useAgoraStore.getState().agoraToken;

export const useClient = createClient(clientConfig);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
