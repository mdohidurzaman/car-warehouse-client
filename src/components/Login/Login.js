import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Longin.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef(" ");
  const passwordRef = useRef(" ");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="contianer w-50 mx-auto login-form">
      <h1 className="text-center form-heading">Login to Car Warehouse!!</h1>
      <Form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          ref={passwordRef}
          required
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <input
          className="login-btn w-25 mx-auto d-block"
          type="submit"
          value="Login"
        />
      </Form>

      <p>
        New to Car Services ?
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={navigateToRegister}
        >
          Please Register.
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
