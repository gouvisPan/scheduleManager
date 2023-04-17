import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.scss";

interface textFieldProps {
  name: string;
  type?: string;
  value?: string;
  className?: string;
  pholder?: string;
}

const TextField: React.FC<textFieldProps> = (props) => {
  const [field] = useField(props);

  return (
    <div className="text-field">
      <input
        {...field}
        {...props}
        value={props.value}
        placeholder={props.pholder}
        className={props.className}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-field__error"
      />
    </div>
  );
};

export default TextField;
