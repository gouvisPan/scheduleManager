import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import "./Checkbox.scss";
const CheckBox: React.FC<{ clickHandler: () => void; checked: boolean }> = (
  props
) => {
  const [isChecked, setIsChecked] = useState(props.checked);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    props.clickHandler();
  };

  return (
    <div className="checkbox-wrapper">
      <div className="checkbox" onClick={checkHandler}>
        <input type="checkbox" checked={isChecked} />
        <label></label>
      </div>
    </div>
  );
};

export default CheckBox;
