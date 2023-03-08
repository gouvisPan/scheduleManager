import React, { useState } from "react";
import "./Switch.scss";

const Switch: React.FC<{ switchHandler: () => void }> = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const slideHandler = () => {
    setIsEnabled((isEnabled) => !isEnabled);
    props.switchHandler();
  };

  return (
    <div className="switch-outter">
      <div
        className={`switch-inner ${isEnabled ? "slide-on" : ""}`}
        onClick={slideHandler}
      >
        <span>{isEnabled ? "" : ""}</span>
      </div>
    </div>
  );
};

export default Switch;
