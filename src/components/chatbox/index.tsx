import ChatInput from "../chat-input";
import ChatMessages from "../chat-messages";
import ChatBoxHeader from "../chatbox-header";
import "./styles.css";

const ChatBox = () => {
  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <ChatBoxHeader
          title="Group Chat"
          writingList={["Deniz", "Kemal", "Pelin", "Mehmet", "Ayşe"]}
        />
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
};
export default ChatBox;
