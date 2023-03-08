import { Form, Formik } from "formik";
import React, { useState } from "react";
import TextField from "../../../../components/UI/TextField";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { dataActions } from "../../../../store/slices/data-slice";
import * as Yup from "yup";
import CategoryPicker from "./CategoryPicker/CategoryPicker";
import "./AddTodo.scss";

import DropDownPicker from "./DropDownPicker/DropDownPicker";

const AddTodo: React.FC<{}> = (props) => {
  const { displayingDate } = useAppSelector((state) => state.ui);
  const [category, setCategory] = useState(0);
  const [investedHours, setInvestedHours] = useState<number | undefined>(
    undefined
  );
  const [timeOfTheDay, setTimeOfTheDay] = useState<string | undefined>("05:00");
  const dispatch = useAppDispatch();

  const setValue = (n: number | string) => {
    if (typeof n === "string") {
      setInvestedHours(undefined);
      setTimeOfTheDay(n);
    } else {
      setTimeOfTheDay(undefined);
      setInvestedHours(n);
    }
  };

  // const validate = Yup.object({
  //   title: Yup.string().email("Email is invalid").required("Email is required"),
  //   password: Yup.string().required("Password is required"),
  // });

  const onSubmitHandler = (title: string, info: string) => {
    dispatch(
      dataActions.addEvent({
        date: displayingDate,
        title,
        info,
        investedHours,
        timeOfTheDay,
        category,
      })
    );
  };
  return (
    <Formik
      initialValues={{
        title: "",
        info: "",
        investedHours: 0,
        time: "05:00",
      }}
      // validationSchema={validate}
      onSubmit={(values) => {
        onSubmitHandler(values.title, values.info);
      }}
    >
      {(formik) => (
        <div className="add-form-container">
          <Form className="add-form-container__content">
            <h2>Add</h2>
            <div className="add-form-container__content--text-fields">
              <TextField
                pholder="title"
                name="title"
                type="text"
                islarge={false}
              />
              or (goals)
              <TextField
                pholder="info"
                name="info"
                type="text"
                islarge={false}
              />
            </div>
            <DropDownPicker setValue={(n) => setValue(n)} />
            <CategoryPicker setCategory={(n) => setCategory(n)} />
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

export default AddTodo;
