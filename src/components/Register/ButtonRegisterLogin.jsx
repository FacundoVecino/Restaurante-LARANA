import { useState } from "react";
import "../button/Button.css";

const ButtonRegisterLogin = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
  
    setTimeout(() => {
      setShowOverlay(false);
    }, 500);
  };

  return (
    <div className="px-5">
      <button className="btnRegisterLogin" type="submit" onClick={handleClick}>
      Regístrate
        {showOverlay && <span className="overlay" />}
      </button>
    </div>
  );
};

export default ButtonRegisterLogin;