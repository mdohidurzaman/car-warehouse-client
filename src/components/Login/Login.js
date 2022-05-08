import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Longin.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import Loading from "../Share/Loading/Loading";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    // navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post(
      "https://appseleven.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
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
        <button className="login-btn mx-auto mb-3 d-block w-25 py-2">
          Login
        </button>
      </Form>

      <p>
        New to Car Warehouse ?
        <span
          className="px-2"
          style={{ cursor: "pointer", color: "orange" }}
          onClick={navigateToRegister}
        >
          Please Register.
        </span>
        {errorElement}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
