import { useEffect } from "react";
import "./Spinner.css";

function Spinner() {
  const addBlur = () => {
    let appContainer = document.querySelector(".app-container");
  };

  useEffect(() => {}, []);

  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
