import "./styles.css";

type VideoControlButtonProps = {
  iconOn: () => JSX.Element;
  iconOff: () => JSX.Element;
  active?: boolean;
  onClick?: () => void;
};

const VideoControlButton = ({
  iconOn,
  iconOff,
  active,
  onClick,
}: VideoControlButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`video-controls-button ${active ? "active" : ""} `}
    >
      {active ? iconOn() : iconOff()}
    </div>
  );
};

export default VideoControlButton;
