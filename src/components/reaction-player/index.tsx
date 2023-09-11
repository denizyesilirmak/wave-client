import Lottie, { LottieRefCurrentProps } from "lottie-react";
import "./styles.css";

import { reactionAnimations } from "@/assets/animations";
import { useEffect, useRef, useState } from "react";

const ReactionPlayer = () => {
  const lottieRef = useRef(
    null
  ) as React.MutableRefObject<LottieRefCurrentProps | null>;

  const [animationData, setAnimationData] = useState(
    reactionAnimations.fireworks
  );

  const handlePlay = () => {
    lottieRef.current?.setSpeed(1);

    const animationNameArray = Object.keys(reactionAnimations);
    const randomAnimationName =
      animationNameArray[Math.floor(Math.random() * animationNameArray.length)];

    setAnimationData(reactionAnimations[randomAnimationName]);

    lottieRef.current?.goToAndPlay(0, true);
  };

  useEffect(() => {
    lottieRef.current?.setSpeed(0);
    lottieRef.current?.goToAndStop(0, true);
  }, []);

  return (
    <div className="reaction-player">
      <Lottie
        autoplay={false}
        loop={false}
        lottieRef={lottieRef}
        animationData={animationData}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.8,
        }}
      />
      <button
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1000 }}
        onClick={handlePlay}
      >
        Play
      </button>
    </div>
  );
};

export default ReactionPlayer;
