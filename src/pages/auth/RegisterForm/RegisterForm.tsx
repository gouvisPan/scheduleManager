import { Form, Formik } from "formik";
import * as Yup from "yup";
import "./RegisterForm.scss";
import TextField from "../TextField";
import { useAppDispatch } from "../../../hooks/hooks";
import { signUpUser } from "../../../store/Auth/async-actions";

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email is invalid, enter a valid email.")
      .required("Email is required"),
    password: Yup.string()
      .required("Please enter your password.")
      .min(6, "Your password must be at least 6 characters."),
    confirmPassword: Yup.string()
      .required("Please retype your password.")
      .oneOf([Yup.ref("password")], "Your passwords do not match, try again. "),
  });
  const onSubmitHandler = (email: string, name: string, password: string) => {
    dispatch(
      signUpUser({
        email,
        password,
        name,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        onSubmitHandler(values.email, values.name, values.password);
      }}
    >
      {(formik) => (
        <div className="form-container">
          <Form className="form-container__content">
            <h1>Sign Up</h1>
            <div className="form-container__content--text-fields">
              <TextField pholder="fullname" name="name" type="text" />
              <TextField pholder="e-mail" name="email" type="text" />
              <TextField pholder="password" type="password" name="password" />
              <TextField
                pholder="confirm password"
                type="password"
                name="confirmPassword"
              />
            </div>
            <button
              type="submit"
              className="form-container__content--submit-btn"
            >
              Sign Up
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
