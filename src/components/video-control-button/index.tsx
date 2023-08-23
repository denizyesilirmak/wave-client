import "./styles.css";
import { VideoControlButtonProps } from "./types";

const VideoControlButton = ({
  iconOn,
  iconOff,
  active,
  onClick,
  popOverText,
}: VideoControlButtonProps) => {
  return (
    <div
      data-popover={popOverText}
      onClick={onClick}
      className={`video-controls-button ${active ? "active" : ""} `}
    >
      <div className="video-control-icon-wrapper">
        {active ? iconOn() : iconOff()}
      </div>
    </div>
  );
};

export default VideoControlButton;
