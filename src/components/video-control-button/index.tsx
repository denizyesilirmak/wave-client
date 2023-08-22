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
