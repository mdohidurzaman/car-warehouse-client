import React from "react";
import google from "../../../images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }
  if (user) {
    navigate("/");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          style={{ width: "30%" }}
          className="manage-btn d-block mx-auto mb-3"
        >
          <img
            style={{ width: "53px", paddingRight: "10px" }}
            src={google}
            alt=""
          />
          Google Sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
