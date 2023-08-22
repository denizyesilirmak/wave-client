import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import "./styles.css";

import { reactionAnimations } from "@/assets/animations";

const ReactionPlayer = () => {
  const lottieRef = useRef(null);
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    const interval = setTimeout(() => {
      setAnimation(reactionAnimations.fireworks2);
      lottieRef.current.play();
    }, 5000);
    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="reaction-player">
      <Lottie
        loop={false}
        ref={lottieRef}
        animationData={animation}
        style={{ width: "100%", height: "100%", opacity: 0.7 }}
      />
    </div>
  );
};

export default ReactionPlayer;
