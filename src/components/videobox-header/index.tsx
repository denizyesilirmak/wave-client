import "./styles.css";

import { ReactComponent as Topic } from "@assets/icons/topic.svg";
import { ReactComponent as Copy } from "@assets/icons/copy.svg";
import { ReactComponent as Group } from "@assets/icons/group.svg";
import { useTranslation } from "react-i18next";

const VideoBoxHeader = ({ title }: { title: string }) => {
  const { t } = useTranslation();

  return (
    <div className="videobox-header">
      <div className="video-header-row">
        <Topic className="videobox-header-icon" />
        <div className="videobox-header-text">{title}</div>
      </div>
      <div className="video-header-row">
        <div className="copy-link">
          <Copy className="copy-link-icon" />
          <span>{t('copy-meeting-link')}</span>
        </div>
        <div className="copy-link">
          <Group className="copy-link-icon" />
          <span>{t("participants")}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoBoxHeader;
