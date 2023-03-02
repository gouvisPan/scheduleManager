import React, { useState } from "react";
import "./DropDownPicker.scss";
import { timesArray, hoursArray } from "../../../../../helpers/generateArrays";

const DropDownPicker: React.FC<{
  setValue: (n: number | string) => void;
}> = (props) => {
  const [menuState, setMenuState] = useState<number | string>(0);
  const [isFlexible, setIsFlexible] = useState(false);
  const title = isFlexible ? "Hours to invest" : "Time of the day";
  const displayingArray = isFlexible ? hoursArray : timesArray;

  const changeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    if (!isFlexible) {
      setMenuState(e.currentTarget.value);
      props.setValue(e.currentTarget.value);
    }
    if (isFlexible) {
      setMenuState(parseInt(e.currentTarget.value));
      props.setValue(parseInt(e.currentTarget.value));
    }
  };

  return (
    <div className="drop-down-picker">
      <h4>{title}</h4>
      <select
        name="selectHistory"
        onChange={changeHandler}
        defaultValue={menuState}
      >
        {displayingArray.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownPicker;
