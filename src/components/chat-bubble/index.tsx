import { colorGenerator } from "../../utils/color-generator";
import "./styles.css";
import { ChatBubbleProps } from "./types";

const ChatBubble = ({ from, messageBody }: ChatBubbleProps) => {
  return (
    <div className="chat-bubble-container">
      <div
        className="sender"
        style={{
          color: colorGenerator(from),
        }}
      >
        {from}
      </div>
      <div className="chat-bubble">
        <div className="chat-bubble-content">
          <p className="chat-bubble-text">{messageBody}</p>
        </div>
        <div className="chat-bubble-date-time">
          <span>12/12/2020 13:23</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
