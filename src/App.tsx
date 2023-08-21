import "./App.css";
import "./theme/theme.css";

import Navigation from "./navigation";
import socketService from "./services/socket.service";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    socketService.connect();
  }, []);
  
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
