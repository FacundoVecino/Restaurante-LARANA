import { useState } from "react";
import "./Button.css";

const Button = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
  
    setTimeout(() => {
      setShowOverlay(false);
    }, 500);
  };

  return (
    <div className="px-5">
      <button type="submit" onClick={handleClick}>
        Create
        {showOverlay && <span className="overlay" />}
      </button>
    </div>
  );
};

export default Button;