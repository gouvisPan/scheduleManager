import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import TextField from "../../../../components/UI/TextField";
import CategoryPicker from "../../DayView/AddTodo/CategoryPicker/CategoryPicker";
import { useAppDispatch } from "../../../../hooks/hooks";
import DatePicker from "react-datepicker";
import "./AddAny.scss";
import { addOptionType, uiActions } from "../../../../store/UI/uiSlice";
import { addTodo } from "../../../../store/Todos/aync-thunks";

const AddTodo = () => {
  const [date, setDate] = useState<Date>(new Date());
  const dispatch = useAppDispatch();

  const onSubmitHandler = (title: string, info: string) => {
    dispatch(uiActions.setAddingType(addOptionType.INACTIVE));
    const dateStr = date!.toISOString();
    dispatch(addTodo({ id: "0", title, date: dateStr, completed: false }));
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
            <h2>Add Todo</h2>
            <div className="add-form-container__content--text-fields">
              <TextField pholder="Title" name="title" type="text" />
              <TextField pholder="Description" name="info" type="text" />
            </div>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date || new Date())}
              onSelect={(date) => setDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />
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
