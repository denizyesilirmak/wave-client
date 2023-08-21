import { useOnlineUsersStore } from "../../store/onlineUsersStore";
import ChatInput from "../chat-input";
import ChatMessages from "../chat-messages";
import ChatBoxHeader from "../chatbox-header";
import OnlineUsers from "../online-users";
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
