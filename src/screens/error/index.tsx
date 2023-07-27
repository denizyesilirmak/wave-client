import { Link } from "react-router-dom";
import "./styles.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1>Error</h1>
      <Link to="/create-session">Go back home</Link>
    </div>
  );
};

export default Error;
