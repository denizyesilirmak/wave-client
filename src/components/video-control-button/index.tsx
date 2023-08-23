import { FunctionComponent, SVGProps } from "react";
import "./styles.css";

type VideoControlButtonProps = {
  iconOn: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  iconOff: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  active?: boolean;
  onClick?: () => void;
  popOverText?: string;
};

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
      <div className="video-control-icon-wrapper">{active ? iconOn() : iconOff()}</div>
    </div>
  );
};

export default VideoControlButton;
