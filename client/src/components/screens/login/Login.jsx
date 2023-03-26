import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from "../../../redux/actionTypes";
import Spinner from "../../atoms/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { httpLoginRequest } from "../../hooks/requests";
import { GrFormClose } from "react-icons/gr";
import "./Login.css";
import { invalidCredsResponseCodes } from "../../../constants/constants";

const Login = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [inSignUpState, setInSignUpState] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormChange = (event) => {
    if (inSignUpState) {
      setSignUpForm({
        ...signUpForm,
        [event.target.name]: event.target.value,
      });
    } else {
      setSignInForm({
        ...signInForm,
        [event.target.name]: event.target.value,
      });
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setShowLoader(true);
    try {
      let response;
      if (inSignUpState) {
        response = await httpLoginRequest(signUpForm, inSignUpState);
      } else {
        response = await httpLoginRequest(signInForm, inSignUpState);
      }

      console.log({ response });

      if (invalidCredsResponseCodes.includes(response?.statusCode)) {
        setShowError(true);
      }

      //SUCCESS SCENARIO
      if (response?.statusCode === 200 && response?.body?.user) {
        setShowError(false);
        dispatch({
          type: inSignUpState ? SIGN_UP_SUCCESS : SIGN_IN_SUCCESS,
          payload: response?.body?.user,
        });
        navigate("/");
      }

      //ERROR SCENARIO
      if (response?.body?.error) {
        dispatch({
          type: inSignUpState ? SIGN_UP_FAILURE : SIGN_IN_FAILURE,
          payload: response?.body?.error,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: inSignUpState ? SIGN_UP_FAILURE : SIGN_IN_FAILURE,
        payload: error,
      });
    }
    setShowLoader(false);
  };

  const erroNotification = (
    <div className="error-notification-container">
      <div className="error_content">
        <p>Invalid credentials</p>
        <GrFormClose
          className="closebtn"
          onClick={() => setShowError((prev) => !prev)}
        />
      </div>
    </div>
  );

  return (
    <>
      {showLoader && <Spinner />}
      <div className="login__container">
        <div className="login">
          <div
            className={`login__colored-container ${
              inSignUpState
                ? "login__colored-container--left"
                : "login__colored-container--right"
            }`}
          ></div>
          <div
            className={`login__welcome-back ${
              inSignUpState
                ? "login__welcome-back--active"
                : "login__welcome-back--inactive"
            }`}
          >
            <div className="login__welcome-back__main-container">
              <div className="login__welcome-back__main-container__text-container">
                <span className="login__welcome-back__main-container__text-container--title">
                  Welcome Back!
                </span>
                <span className="login__welcome-back__main-container__text-container--secondary">
                  We're thrilled to have you and your furry companion back with
                  us
                </span>
              </div>
              <div
                onClick={() => setInSignUpState((prev) => !prev)}
                className="login__welcome-back__main-container__button-container btn"
              >
                Sign In
              </div>
            </div>
          </div>
          <div
            className={`login__create-container ${
              inSignUpState
                ? "login__create-container--active"
                : "login__create-container--inactive"
            }`}
          >
            <div className="login__create-container__form-container">
              <h5>Create Account</h5>
              <form
                className="login__create-container__form-container__form"
                onSubmit={onSubmitHandler}
              >
                <input
                  className="login__create-container__form-container__form--name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={signUpForm.name}
                  onChange={handleFormChange}
                  required
                  autoFocus
                />
                <input
                  className="login__create-container__form-container__form--email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signUpForm.email}
                  onChange={handleFormChange}
                  required
                />
                <input
                  className="login__create-container__form-container__form--password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={signUpForm.password}
                  onChange={handleFormChange}
                  required
                />
                <button className="login__create-container__form-container__form--submit btn">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div
            className={`login__login-container ${
              !inSignUpState
                ? "login__login-container--active"
                : "login__login-container--inactive"
            }`}
          >
            <div className="login__login-container__main-container">
              <div className="login__login-container__main-container__form-container">
                <h5>Login</h5>
                <form
                  className="login__login-container__main-container__form-container__form"
                  onSubmit={onSubmitHandler}
                >
                  <input
                    className="login__login-container__main-container__form-container__form--email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={signInForm.email}
                    onChange={handleFormChange}
                    autoFocus
                    required
                  />
                  <input
                    className="login__login-container__main-container__form-container__form--password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={signInForm.password}
                    onChange={handleFormChange}
                    required
                  />
                  {showError && erroNotification}
                  <button className="login__login-container__main-container__form-container__form--submit btn sm">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div
            className={`login__hello-container ${
              !inSignUpState
                ? "login__hello-container--active"
                : "login__hello-container--inactive"
            }`}
          >
            <div className="login__welcome-back__main-container__text-container">
              <span className="login__welcome-back__main-container__text-container--title">
                Hello, stranger!
              </span>
              <span className="login__welcome-back__main-container__text-container--secondary">
                Enter your personal details and start your own portfolio!
              </span>
            </div>
            <div
              onClick={() => setInSignUpState((prev) => !prev)}
              className="login__welcome-back__main-container__button-container"
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
