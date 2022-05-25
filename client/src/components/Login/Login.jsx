import React, { useState } from "react";
// router dom
import { Link, useNavigate } from "react-router-dom";
// auth functions
import { signInEmailAndPassword } from "../../firebase/auth";
import "./Login.scss";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      setError(null);
      // auth in firebase and api
      await signInEmailAndPassword(values.email, values.password);

      // set user in redux
      dispatch(setUser(apiUser));
      navigate("/");
      console.log("yaaas");
    } catch (e) {
      setError("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleLogin} autoComplete="off">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder=" Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button
              className="button login__submit"
              type="submit"
              disabled={isLoading}
            >
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <Link to="/signUp" className="">
              Sign UP
            </Link>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
