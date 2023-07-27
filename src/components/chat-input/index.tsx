import "./styles.css";

import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { useState } from "react";
import { addMessage } from "../../store/chatStore";

import { MOCK_USERS } from "../../mocks/users";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    //get random user
    const randomUser =
      MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)];

    addMessage({
      from: randomUser.name,
      messageBody: message.trim(),
    });
    setMessage("");
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey && message !== "") {
      if (message.trim() === "") return;
      sendMessage();
      setMessage("");
    }
  };

  return (
    <div className="chat-input-container">
      <textarea
        className="chat-input"
        placeholder="Type a message"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        value={message}
      />
      <button className="chat-send-button" onClick={sendMessage}>
        <SendIcon className="chat-send-icon" />
      </button>
    </div>
  );
};

export default ChatInput;
