import { setIsLogged, setUser } from "@/store/auth.store";
import "./styles.css";
import WaveLogo from "@assets/images/logo-small.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email || !password) return;

    setLoading(true);
    fetchLogin(email, password);
  };

  const fetchLogin = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!data.success) {
        setLoading(false);
        setError(true);
        return;
      }

      console.log(data.data.token);

      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data));
      setUser(data.data);
      setIsLogged(true);
      navigate("/video-conference");
    } catch (error) {
      alert("Something went wrong");
      setLoading(false);
    }
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
            ref={emailRef}
            type="email"
            placeholder="Sisal Email"
            className={`login-screen-input ${error ? "error" : ""}`}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            disabled={loading}
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className={`login-screen-input ${error ? "error" : ""}`}
            disabled={loading}
          />

          <div className="login-screen-error">
            {error && "Invalid email or password"}
          </div>

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
