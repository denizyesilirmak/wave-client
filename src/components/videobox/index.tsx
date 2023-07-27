import "./styles.css";

import VideoBoxHeader from "../videobox-header";
import VideoControls from "../video-controls";
import { useEffect } from "react";

const VideoBox = () => {
  useEffect(() => {
    //camera and mic access
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        const video = document.querySelector("video");
        // @ts-ignore
        video.srcObject = stream;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="videobox-container">
      <div className="videobox">
        <VideoBoxHeader title="Pair Programming with fellows" />
        <div className="videobox-content">
          <div className="videobox-content-video">
            <VideoControls />
            <video
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoBox;
