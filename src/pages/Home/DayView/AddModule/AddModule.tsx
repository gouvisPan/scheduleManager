import { useEffect, useState } from "react";
import "./AddModule.scss";
import { RiAddLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import * as uiActions from "../../../../simpleStore/actions/uiActions";
import AddForm from "./AddForm/AddForm";

const AddModule = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.ui.addClickOption);

  const addEventHandler = (type: string) => {
    setIsHovered(false);
    dispatch(uiActions.setAddingType(type));
  };

  const content = !isHovered ? (
    <RiAddLine />
  ) : (
    <ul>
      <li onClick={() => addEventHandler("todo")}>Todo</li>
      <li onClick={() => addEventHandler("goal")}>Goal</li>
      <li onClick={() => addEventHandler("routine")}>Routine</li>
    </ul>
  );
  const conCSS = isHovered ? "m-expanded" : "";
  //TODO: REMOVE DYNAMIC CSS FROM WRAPPER
  const wrapCSS = isHovered ? "w-expanded" : "";

  return (
    <div className={`button-wrapper ` + wrapCSS}>
      {category ? (
        <AddForm />
      ) : (
        <div
          className={`module-container ` + conCSS}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default AddModule;
