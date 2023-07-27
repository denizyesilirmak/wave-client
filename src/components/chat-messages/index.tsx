import { useChatStore } from "../../store/chatStore";
import ChatBubble from "../chat-bubble";
import "./styles.css";

const ChatMessages = () => {
  //get messages from store
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="chat-messages-container">
      {messages.map((message, index) => (
        <ChatBubble
          key={index}
          from={message.from}
          messageBody={message.messageBody}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
