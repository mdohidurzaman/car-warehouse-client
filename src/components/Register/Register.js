import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Register.css";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import Loading from "../Share/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="register-form">
      <h2 className="m-5 text-center form-heading">
        Register to Car Warehouse!
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          required
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <button className="register-btn mx-auto mb-3 d-block py-2 px-5">
          Register
        </button>
      </form>
      <p>
        Have an Account ?{" "}
        <span
          className=""
          style={{ cursor: "pointer", color: "orange" }}
          onClick={navigateToLogin}
        >
          Please Login.
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
