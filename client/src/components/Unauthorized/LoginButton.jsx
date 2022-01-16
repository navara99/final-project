import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <>
      <button>
        <Link to="/login">Login</Link>
      </button>
      &nbsp;or&nbsp;
      <button>
        <Link to="/register">regsiter</Link>
      </button>
    </>
  );
};

export default LoginButton;
