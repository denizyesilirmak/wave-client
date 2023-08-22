import { useState } from "react";
import "./styles.css";

import { ReactComponent as CameraOn } from "@assets/icons/video-on.svg";
import { ReactComponent as CameraOff } from "@assets/icons/video-off.svg";
import { ReactComponent as MicrophoneOn } from "@assets/icons/mic-on.svg";
import { ReactComponent as MicrophoneOff } from "@assets/icons/mic-off.svg";
import { ReactComponent as ShareScreenOn } from "@assets/icons/screen-on.svg";
import { ReactComponent as ShareScreenOf } from "@assets/icons/screen-off.svg";

import VideoControlButton from "@components/video-control-button";
import VoiceWave from "@components/voice-wave";

const VideoControls = () => {
  const [cameraState, setCameraState] = useState(true);
  const [microphoneState, setMicrophoneState] = useState(true);
  const [shareScreenState, setShareScreenState] = useState(false);

  return (
    <div className="videobox-controls">
      <VideoControlButton
        iconOn={CameraOn}
        iconOff={CameraOff}
        active={cameraState}
        onClick={() => setCameraState(!cameraState)}
      />
      <VideoControlButton
        iconOn={MicrophoneOn}
        iconOff={MicrophoneOff}
        active={microphoneState}
        onClick={() => setMicrophoneState(!microphoneState)}
      />
      <VideoControlButton
        iconOn={ShareScreenOn}
        iconOff={ShareScreenOf}
        active={shareScreenState}
        onClick={() => setShareScreenState(!shareScreenState)}
      />
      <VoiceWave />
    </div>
  );
};

export default VideoControls;
