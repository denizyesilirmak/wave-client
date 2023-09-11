import { useState } from "react";

import "./styles.css";

import { ReactComponent as SendIcon } from "@assets/icons/send.svg";
import { addMessage } from "@/store/chat.store";
import { MOCK_USERS } from "@mocks/users";
import { useTranslation } from "react-i18next";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const sendMessage = () => {
    const randomUser =
      MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)];

    addMessage({
      from: randomUser.name,
      messageBody: message.trim(),
    });
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-input-container">
      <textarea
        className="chat-input"
        placeholder={t("type-a-message")}
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
