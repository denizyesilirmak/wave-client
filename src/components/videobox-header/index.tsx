import "./styles.css";
import { ReactComponent as Topic } from "../../assets/icons/topic.svg";

import { ReactComponent as Copy } from "../../assets/icons/copy.svg";
import { ReactComponent as Group } from "../../assets/icons/group.svg";

const VideoBoxHeader = ({ title }: { title: string }) => {
  return (
    <div className="videobox-header">
      <div className="video-header-row">
        <Topic className="videobox-header-icon" />
        <div className="videobox-header-text">{title}</div>
      </div>
      <div className="video-header-row">
        <div className="copy-link">
          <Copy className="copy-link-icon" />
          <span>copy link</span>
        </div>
        <div className="copy-link">
          <Group className="copy-link-icon" />
          <span>participants</span>
        </div>
      </div>
    </div>
  );
};

export default VideoBoxHeader;
