import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as uiActions from "../../../../../simpleStore/actions/uiActions";
import TextField from "../../../../../components/UI/TextField";
import { useAppDispatch } from "../../../../../hooks/hooks";
import DropDownPicker from "../../AddTodo/DropDownPicker/DropDownPicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddAny.scss";
const AddGoal = () => {
  const [hours, setHours] = useState(1);
  const dispatch = useAppDispatch();

  const onSubmitHandler = (title: string, info: string) => {
    dispatch(uiActions.setAddingType(0));
  };

  const setDDValue = (n: number) => {
    setHours(n);
  };

  return (
    <Formik
      initialValues={{
        title: "",
        info: "",
        investedHours: 0,
      }}
      // validationSchema={validate}
      onSubmit={(values) => {
        onSubmitHandler(values.title, values.info);
      }}
    >
      {(formik) => (
        <div className="add-form-container">
          <Form className="add-form-container__content">
            <h2>Add Goal</h2>
            <div className="add-form-container__content--text-fields">
              <TextField pholder="Title" name="title" type="text" />
              <TextField pholder="Description" name="title" type="text" />
            </div>
            <DropDownPicker setHours={(n) => setDDValue(n)} isTime={false} />
            <button
              type="submit"
              className="add-form-container__content--submit-btn"
            >
              Add
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AddGoal;
