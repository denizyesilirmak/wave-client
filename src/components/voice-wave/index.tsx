import { useEffect } from "react";

import "./styles.css";

const VoiceWave = () => {
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        const audioCtx = new AudioContext();
        const analyser = audioCtx.createAnalyser();
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);
        analyser.fftSize = 32;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const svg = document.querySelector("#wave-svg");

        const rects = svg.querySelectorAll("rect");

        const rectMaxHeight = 60;

        const draw = () => {
          requestAnimationFrame(draw);
          analyser.getByteFrequencyData(dataArray);
          for (let i = 0; i < rects.length; i++) {
            const rect = rects[i];
            const height = dataArray[i] / 7;
            rect.setAttribute("height", `${height}`);
            rect.setAttribute("y", `${rectMaxHeight - height}`);
          }
        };
        draw();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="voice-wave">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        id="wave-svg"
      >
        <rect x="14" y="0" width="6" height="10" fill="#ffffff" rx="3" />
        <rect x="22" y="0" width="6" height="10" fill="#ffffff" rx="3" />
        <rect x="30" y="0" width="6" height="10" fill="#ffffff" rx="3" />
        <rect x="38" y="0" width="6" height="10" fill="#ffffff" rx="3" />
        <rect x="46" y="0" width="6" height="10" fill="#ffffff" rx="3" />
        <rect x="54" y="0" width="6" height="10" fill="#ffffff" rx="3" />
        <rect x="62" y="0" width="6" height="10" fill="#ffffff" rx="3" />
        <rect x="70" y="0" width="6" height="10" fill="#ffffff" rx="3" />
        <rect x="78" y="0" width="6" height="10" fill="#ffffff" rx="3" />
      </svg>
    </div>
  );
};

export default VoiceWave;
