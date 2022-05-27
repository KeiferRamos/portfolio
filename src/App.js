import Navbar from "./components/navbar";
import Routes from "./router/router";
import "./styles/app.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
