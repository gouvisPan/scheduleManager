import React, { useState } from "react";
import "./DropDownPicker.scss";

const DropDownPicker: React.FC<{
  setValue: (v: string) => void;
  displayedArray: string[];
  title: string;
}> = (props) => {
  const [menuState, setMenuState] = useState<string>(props.displayedArray[0]);

  const changeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setMenuState(e.currentTarget.value);
    props.setValue(e.currentTarget.value);
  };
  return (
    <div className="drop-down-picker">
      <h4>{props.title}</h4>
      <select
        name="selectHistory"
        onChange={changeHandler}
        defaultValue={menuState}
      >
        {props.displayedArray.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownPicker;
