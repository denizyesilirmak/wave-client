import { ReactComponent as Pen } from "@assets/icons/pen.svg";
import "./styles.css";

type ChatBoxHeaderProps = {
  title: string;
  writingList: string[];
};

const AnimatedDots = () => {
  return (
    <>
      <span className="dot dot-1">.</span>
      <span className="dot dot-2">.</span>
      <span className="dot dot-3">.</span>
    </>
  );
};

const WritingText = ({ writingList }: { writingList: string[] }) => {
  if (writingList.length === 0) return null;
  else if (writingList.length === 1)
    return (
      <span className="chatbox-typing-text">{writingList[0]} is typing<AnimatedDots /></span>
    );
  else if (writingList.length === 2 && writingList.length < 3)
    return (
      <span className="chatbox-typing-text">
        {writingList.join(", ")} are typing<AnimatedDots />
      </span>
    );
  else
    return (
      <span className="chatbox-typing-text">
        {writingList.slice(0, 2).join(", ")} and {writingList.length - 2} more
        are typing<AnimatedDots />
      </span>
    );
};

const ChatBoxHeader = ({ title, writingList }: ChatBoxHeaderProps) => {
  return (
    <div className="chatbox-header">
      <div className="chatbox-header-title">{title}</div>
      <div className="chatbox-header-info">
        {writingList.length === 0 ? null : (
          <>
            <Pen className="chatbox-typing-icon" />
            <WritingText writingList={writingList} />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBoxHeader;
