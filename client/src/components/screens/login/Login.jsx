import { useState } from "react";
import "./Login.css";

function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(false);
  return (
    <div className="login__container">
      <div className="login">
        <div
          className={`login__colored-container ${
            loginState
              ? "login__colored-container--left"
              : "login__colored-container--right"
          }`}
        ></div>
        <div
          className={`login__welcome-back ${
            loginState
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
                We're thrilled to have you and your furry companion back with us
              </span>
            </div>
            <div
              onClick={() => setLoginState((prev) => !prev)}
              className="login__welcome-back__main-container__button-container btn"
            >
              Sign In
            </div>
          </div>
        </div>
        <div
          className={`login__create-container ${
            loginState
              ? "login__create-container--active"
              : "login__create-container--inactive"
          }`}
        >
          <div className="login__create-container__form-container">
            <h5>Create Account</h5>
            <form
              className="login__create-container__form-container__form"
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   this.signUp();
              // }}
            >
              <input
                className="login__create-container__form-container__form--name"
                type="text"
                placeholder="Name"
                // value={signUpForm.name}
                onChange={(value) => {}}
                required
                autoFocus
              />
              <input
                className="login__create-container__form-container__form--email"
                type="email"
                placeholder="Email"
                // value={signUpForm.email}
                onChange={(value) => {}}
                required
              />
              <input
                className="login__create-container__form-container__form--password"
                type="password"
                placeholder="Password"
                // value={signUpForm.password}
                onChange={(value) => {}}
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
            !loginState
              ? "login__login-container--active"
              : "login__login-container--inactive"
          }`}
        >
          <div className="login__login-container__main-container">
            <div className="login__login-container__main-container__form-container">
              <h5>Login</h5>
              <form
                className="login__login-container__main-container__form-container__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.signIn();
                }}
              >
                <input
                  className="login__login-container__main-container__form-container__form--email"
                  type="email"
                  placeholder="Email"
                  // value={signInForm.email}
                  onChange={(value) => {}}
                  autoFocus
                  required
                />
                <input
                  className="login__login-container__main-container__form-container__form--password"
                  type="password"
                  placeholder="Password"
                  // value={signInForm.password}
                  onChange={(value) => {}}
                  required
                />
                <button className="login__login-container__main-container__form-container__form--submit btn sm">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`login__hello-container ${
            !loginState
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
            onClick={() => setLoginState((prev) => !prev)}
            className="login__welcome-back__main-container__button-container"
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
