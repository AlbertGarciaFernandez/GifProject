import React, { useState } from "react";
// router dom
import { Link, useNavigate } from "react-router-dom";
// utils
import { signUpEmailAndPassword } from "../../firebase/auth";

import "./SignUp.scss";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async ({ email, password }) => {
    try {
      setIsLoading(true);
      // auth in firebase and api
      await signUpEmailAndPassword(email, password);
      navigate("/");
    } catch (e) {
      const message = handleAuthErrors(e.message);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <div className="" />
          <form className="login" onSubmit={handleSignup} autoComplete="off">
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
              <span className="button__text">Sign Up Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <Link
              to="/login"
              className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
            >
              Back to Login
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

export default Signup;
