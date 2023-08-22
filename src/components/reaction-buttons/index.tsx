import "./styles.css";
import HeartIcon from "@assets/icons/heart.svg";
import BoltIcon from "@assets/icons/bolt.svg";

const ReactionButtons = () => {
  return (
    <div className="reaction-buttons">
      <div className="reaction-button">
        <img src={HeartIcon} alt="heart" />
      </div>
      <div className="reaction-button">
        <img src={BoltIcon} alt="heart" />
      </div>
    </div>
  );
};

export default ReactionButtons;
