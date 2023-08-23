import ChatInput from "@components/chat-input";
import ChatMessages from "@components/chat-messages";
import ChatBoxHeader from "@components/chatbox-header";
import OnlineUsers from "@components/online-users";

import "./styles.css";
import { useTranslation } from "react-i18next";

const ChatBox = () => {
  const { t } = useTranslation();

  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <ChatBoxHeader
          title={t("group-chat")}
          writingList={["Deniz", "Kemal", "Pelin", "Mehmet", "Ayşe"]}
        />
        <OnlineUsers />
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
};
export default ChatBox;
