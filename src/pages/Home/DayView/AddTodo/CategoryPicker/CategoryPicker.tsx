import React, { useState } from "react";
import "./CategoryPicker.scss";

const CategoryPicker: React.FC<{ setCategory: (c: number) => void }> = (
  props
) => {
  const [activeBullet, setActiveBullet] = useState(0);

  const handleClick = (n: number) => {
    setActiveBullet(n);
    props.setCategory(n);
  };

  return (
    <div className="picker-container">
      <h4>Category</h4>
      <div className="picker-container__bullets">
        <div
          className={`bullet blue ${activeBullet === 1 ? "active-bullet" : ""}`}
          onClick={() => handleClick(1)}
        ></div>
        <div
          className={`bullet red ${activeBullet === 2 ? "active-bullet" : ""}`}
          onClick={() => handleClick(2)}
        ></div>
        <div
          className={`bullet green ${
            activeBullet === 3 ? "active-bullet" : ""
          }`}
          onClick={() => handleClick(3)}
        ></div>
        <div
          className={`bullet orange ${
            activeBullet === 4 ? "active-bullet" : ""
          }`}
          onClick={() => handleClick(4)}
        ></div>
        <div
          className={`bullet yellow ${
            activeBullet === 5 ? "active-bullet" : ""
          }`}
          onClick={() => handleClick(5)}
        ></div>
      </div>
    </div>
  );
};

export default CategoryPicker;
