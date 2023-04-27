import React, { Fragment } from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import "./Auth.scss";
import { useState, useEffect } from "react";

import LoginForm from "./LoginForm/LoginForm";
import { useAppSelector } from "../../hooks/hooks";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

const Auth: React.FC = () => {
  const [signUp, setSignUp] = useState(false);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const buttonTxt = `Sign ${signUp ? "in" : "up"}`;
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const signButtonHandler = () => {
    setSignUp(!signUp);
  };

  return (
    <div className="auth">
      {isAuthenticated ? (
        <Navigate to="/home" state={{ from: location }} replace />
      ) : null}
      {signUp ? <RegisterForm /> : <LoginForm />}
      or
      <button onClick={signButtonHandler} className="auth__change-btn">
        {buttonTxt}
      </button>
    </div>
  );
};

export default Auth;
