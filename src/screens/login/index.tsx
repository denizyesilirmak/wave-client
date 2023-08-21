import "./styles.css";
import WaveLogo from "@assets/images/logo-small.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleMouseMove = (e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    //rotate3d
    const xRotation = (y - 50) / 10;
    const yRotation = (x - 50) / 10;

    container.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLogin = () => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      navigate("/create-session");
    }, 2000);
    return () => clearTimeout(timeout);
  };

  return (
    <div className="login-screen">
      <div
        ref={containerRef}
        className={`login-panel-outline ${loading ? "active" : ""}`}
      >
        <div className="login-screen-panel">
          <img src={WaveLogo} alt="Wave Logo" className="login-screen-logo" />
          <h2 className="login-screen-title">Wave</h2>
          <h5 className="login-screen-subtitle">
            Wave is a video conferencing app that allows you to talk with your
            coligues
          </h5>

          <input
            type="email"
            placeholder="Sisal Email"
            className="login-screen-input"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-screen-input"
            disabled={loading}
          />

          <button onClick={handleLogin} className="login-screen-button">
            Login
          </button>

          <span className="legal-text">
            Wave is not a product of Sisal. This is a demo app created by
            deniz.yesilirmak@sisal.com
            <br />
            You can find the source code on github.com/denizyesilirmak/wave
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
