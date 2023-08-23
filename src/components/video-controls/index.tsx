import { useState } from "react";
import "./styles.css";

import { ReactComponent as CameraOn } from "@assets/icons/video-on.svg";
import { ReactComponent as CameraOff } from "@assets/icons/video-off.svg";
import { ReactComponent as MicrophoneOn } from "@assets/icons/mic-on.svg";
import { ReactComponent as MicrophoneOff } from "@assets/icons/mic-off.svg";
import { ReactComponent as ShareScreenOn } from "@assets/icons/screen-on.svg";
import { ReactComponent as ShareScreenOf } from "@assets/icons/screen-off.svg";
import { ReactComponent as FullScreenOn } from "@assets/icons/fullscreen-on.svg";
import { ReactComponent as FullScreenOff } from "@assets/icons/fullscreen-off.svg";

import VideoControlButton from "@components/video-control-button";
import VoiceWave from "@components/voice-wave";
import ReactionButtons from "../reaction-buttons";
import { useTranslation } from "react-i18next";

const VideoControls = () => {
  const { t } = useTranslation();

  const [cameraState, setCameraState] = useState(true);
  const [microphoneState, setMicrophoneState] = useState(true);
  const [shareScreenState, setShareScreenState] = useState(false);
  const [fullScreenState, setFullScreenState] = useState(false);

  return (
    <div className="videobox-controls">
      <VideoControlButton
        iconOn={CameraOn}
        iconOff={CameraOff}
        active={cameraState}
        popOverText={cameraState ? t('turn-on-camera') : t('turn-off-camera')}
        onClick={() => setCameraState(!cameraState)}
      />
      <VideoControlButton
        iconOn={MicrophoneOn}
        iconOff={MicrophoneOff}
        active={microphoneState}
        popOverText={microphoneState ? t('turn-on-mic') : t('turn-off-mic')}
        onClick={() => setMicrophoneState(!microphoneState)}
      />
      <VideoControlButton
        iconOn={ShareScreenOn}
        iconOff={ShareScreenOf}
        active={shareScreenState}
        popOverText={shareScreenState ? t('turn-on-screen-share') : t('turn-off-screen-share')}
        onClick={() => setShareScreenState(!shareScreenState)}
      />
      <VideoControlButton
        iconOn={FullScreenOn}
        iconOff={FullScreenOff}
        active={fullScreenState}
        popOverText={fullScreenState ? t('turn-on-full-screen') : t('turn-off-full-screen')}
        onClick={() => setFullScreenState(!fullScreenState)}
      />
      <VoiceWave />
      <ReactionButtons />
    </div>
  );
};

export default VideoControls;
