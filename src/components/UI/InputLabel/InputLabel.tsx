import React, { Fragment, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./InputLabel.scss";

const InputLabel: React.FC<{ info: string }> = ({ info }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const clickSaveHandler = () => {
    setIsClicked(false);
  };

  const inputJSX = (
    <div className="input-c">
      <input placeholder={info}></input>
      <BsFillCheckCircleFill
        onClick={clickSaveHandler}
        className="input-c__icon"
      />
    </div>
  );

  const labelJSX = (
    <label className="label-c" onClick={() => setIsClicked(true)}>
      {info}
    </label>
  );
  return <Fragment>{isClicked ? inputJSX : labelJSX}</Fragment>;
};

export default InputLabel;
