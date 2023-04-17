import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import TextField from "../../../../components/UI/TextField";
import CategoryPicker from "../../DayView/AddTodo/CategoryPicker/CategoryPicker";
import DropDownPicker from "../../DayView/AddTodo/DropDownPicker/DropDownPicker";
import { useAppDispatch } from "../../../../hooks/hooks";
import DatePicker from "react-datepicker";
import "./AddAny.scss";
import { addOptionType, uiActions } from "../../../../store/UI/uiSlice";

const AddTodo = () => {
  const [category, setCategory] = useState(0);
  const [date, setDate] = useState<Date | null>(new Date());
  const dispatch = useAppDispatch();

  const onSubmitHandler = (title: string, info: string) => {
    dispatch(uiActions.setAddingType(addOptionType.INACTIVE));
    const dateStr = date!.toISOString().slice(0, 10);
    const timeStr = date!.toLocaleTimeString().slice(0, 5);

    // dispatch(
    //   todoActions.addTodo({
    //     date: normalizeDateStr(dateStr),
    //     title,
    //     time: timeStr,
    //     info,
    //     category,
    //   })
    // );
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
            <CategoryPicker setCategory={(n) => setCategory(n)} />
            {/* <DropDownPicker setTime={(n) => setDDValue(n)} isTime={true} /> */}
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
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
