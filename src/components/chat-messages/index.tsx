import { useChatStore } from "@/store/chat.store";
import ChatBubble from "@components/chat-bubble";
import "./styles.css";

const ChatMessages = () => {
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
