import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.scss";
const Error = () => {
  return (
    <div className="error-container">
      <h2>
        Oops! It seems like you 've lost your route! Get back to{" "}
        <NavLink to="/home">home</NavLink> quickly...
      </h2>
      {/* <img src={lostSvg} alt="Got lost illustration" /> */}
    </div>
  );
};

export default Error;
