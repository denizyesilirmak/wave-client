import { useEffect, useState } from "react";
import "./styles.css";

import { ReactComponent as CameraOn } from "@assets/icons/video-on.svg";
import { ReactComponent as CameraOff } from "@assets/icons/video-off.svg";
import { ReactComponent as MicrophoneOn } from "@assets/icons/mic-on.svg";
import { ReactComponent as MicrophoneOff } from "@assets/icons/mic-off.svg";
import { ReactComponent as ShareScreenOn } from "@assets/icons/screen-on.svg";
import { ReactComponent as ShareScreenOf } from "@assets/icons/screen-off.svg";
import { ReactComponent as FullScreenOn } from "@assets/icons/fullscreen-on.svg";
import { ReactComponent as FullScreenOff } from "@assets/icons/fullscreen-off.svg";
import { ReactComponent as CallOn } from "@assets/icons/call-on.svg";
import { ReactComponent as CallOff } from "@assets/icons/call-off.svg";

import VideoControlButton from "@components/video-control-button";
import VoiceWave from "@components/voice-wave";
import ReactionButtons from "../reaction-buttons";
import { useTranslation } from "react-i18next";

import useAgoraStore, {
  setInCall,
  setStart,
  setUsers,
  setTrackState,
} from "@/store/agora.store";
import {
  useClient,
  useMicrophoneAndCameraTracks,
} from "@/services/agora.service";

const VideoControls = () => {
  const { t } = useTranslation();

  const [shareScreenState, setShareScreenState] = useState(false);
  const [fullScreenState, setFullScreenState] = useState(false);

  const inCall = useAgoraStore((state) => state.inCall);
  const users = useAgoraStore((state) => state.users);
  const appId = useAgoraStore((state) => state.agoraAppId);
  const token = useAgoraStore((state) => state.agoraToken);
  const channelName = useAgoraStore((state) => state.agoraChannel);
  const start = useAgoraStore((state) => state.start);
  const trackState = useAgoraStore((state) => state.trackState);

  console.log("wave-log", "start", start);

  const { tracks, ready } = useMicrophoneAndCameraTracks();

  const client = useClient();

  const mute = async (type: "audio" | "video") => {
    console.log("wave-log", "mute", "VideoControls", "type", type);

    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState({ ...trackState, audio: !trackState.audio });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState({ ...trackState, video: !trackState.video });
    }
  };

  console.log("wave-log", "trackState", trackState);

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    // we close the tracks to perform cleanup
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  useEffect(() => {
    console.log("wave-log", "useEffect", "VideoControls", "leaveChannel");
    const init = async (name: string) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        console.log("wave-log", user, mediaType);

        if (mediaType === "video") {
          setUsers([...users, user]);
        }
        if (mediaType === "audio") {
          user.audioTrack?.play();
        }
      });

      client.on("user-unpublished", (user, type) => {
        console.log("unpublished", user, type);
        if (type === "audio") {
          user.audioTrack?.stop();
        }
        if (type === "video") {
          setUsers(users.filter((User) => User.uid !== user.uid));
        }
      });

      client.on("user-left", (user) => {
        console.log("leaving", user);
        setUsers(users.filter((User) => User.uid !== user.uid));
      });

      try {
        await client.join(appId, name, token, null);
      } catch (error) {
        console.log("wave-log", "ERROR/video-controls/useEffect", error);
      }

      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };

    if (ready && tracks) {
      console.log("init ready");
      try {
        init(channelName);
      } catch (error) {
        console.log("wave-log", "ERROR/video-controls/useEffect/init", error);
      }
    }
  }, [appId, channelName, client, ready, start, token, tracks, users]);

  return (
    <div className="videobox-controls">
      <VideoControlButton
        iconOn={CallOn}
        iconOff={CallOff}
        active={inCall}
        popOverText={inCall ? t("start call") : t("stop call")}
        onClick={() => setInCall(!inCall)}
      />
      <VideoControlButton
        iconOn={CameraOn}
        iconOff={CameraOff}
        active={trackState.video}
        popOverText={
          trackState.video ? t("turn-on-camera") : t("turn-off-camera")
        }
        onClick={() => mute("video")}
      />
      <VideoControlButton
        iconOn={MicrophoneOn}
        iconOff={MicrophoneOff}
        active={trackState.audio}
        popOverText={trackState.audio ? t("turn-on-mic") : t("turn-off-mic")}
        onClick={() => mute("audio")}
      />
      <VideoControlButton
        iconOn={ShareScreenOn}
        iconOff={ShareScreenOf}
        active={shareScreenState}
        popOverText={
          shareScreenState
            ? t("turn-on-screen-share")
            : t("turn-off-screen-share")
        }
        onClick={() => setShareScreenState(!shareScreenState)}
      />
      <VideoControlButton
        iconOn={FullScreenOn}
        iconOff={FullScreenOff}
        active={fullScreenState}
        popOverText={
          fullScreenState ? t("turn-on-full-screen") : t("turn-off-full-screen")
        }
        onClick={() => setFullScreenState(!fullScreenState)}
      />
      <VoiceWave />
      <ReactionButtons />
    </div>
  );
};

export default VideoControls;
