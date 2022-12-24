import React, { useContext, useState, useRef } from "react";
import Styles from "./Style.module.css";
import AuthContext from "../../CartContext/AuthContext";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const history = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const emailInput = useRef();
  const passwordInput = useRef();

  const switchAuthModeHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    let url;
    if (isLoggedIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzNNEAheRrD3QVDarScYG-qXOEETqKMLs";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzNNEAheRrD3QVDarScYG-qXOEETqKMLs";
    }
    fetch(url, {
      method: "Post",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "sign up failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history("/");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <section className={Styles.auth}>
      <h1>{isLoggedIn ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={Styles.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInput} />
        </div>
        <div className={Styles.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInput} />
        </div>
        <div className={Styles.actions}>
          <button>{isLoggedIn ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={Styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLoggedIn ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
