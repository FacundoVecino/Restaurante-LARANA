import { useState } from "react";

const ButtonRegisterLogin = (props) => {
  const { text } = props;

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
        {text}
        {showOverlay && <span className="overlay" />}
      </button>
    </div>
  );
};

export default ButtonRegisterLogin;
