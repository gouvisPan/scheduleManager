import { useEffect, useState } from "react";
import "./AddModule.scss";
import { RiAddLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addOptionType, uiActions } from "../../../store/UI/uiSlice";
import AddForm from "./AddForm/AddForm";

const AddModule = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const addOption = useAppSelector((state) => state.ui.addClickOption);

  const addEventHandler = (type: addOptionType) => {
    setIsHovered(false);
    dispatch(uiActions.setAddingType({ type }));
  };

  const content = !isHovered ? (
    <RiAddLine />
  ) : (
    <ul>
      <li onClick={() => addEventHandler(addOptionType.TODO)}>Todo</li>
      <li onClick={() => addEventHandler(addOptionType.GOAL)}>Goal</li>
      <li onClick={() => addEventHandler(addOptionType.ROUTINE)}>Routine</li>
    </ul>
  );
  const conCSS = isHovered ? "m-expanded" : "";
  //TODO: REMOVE DYNAMIC CSS FROM WRAPPER
  const wrapCSS = isHovered ? "w-expanded" : "";

  return (
    <div className={`button-wrapper ` + wrapCSS}>
      {addOption === addOptionType.INACTIVE ? (
        <div
          className={`module-container ` + conCSS}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {content}
        </div>
      ) : (
        <AddForm />
      )}
    </div>
  );
};

export default AddModule;
