import ChatInput from "@components/chat-input";
import ChatMessages from "@components/chat-messages";
import ChatBoxHeader from "@components/chatbox-header";
import OnlineUsers from "@components/online-users";

import "./styles.css";

const ChatBox = () => {
  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <ChatBoxHeader
          title="Group Chat"
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
