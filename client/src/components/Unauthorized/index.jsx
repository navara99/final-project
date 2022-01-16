import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const Unauthorized = ({ action, logout }) => {
  const Button = logout ? LogoutButton : LoginButton;
  return (
    <div className="unauthorized">
      <h2>Not Authorized</h2>
      <Button logout={logout} />
      &nbsp;before you can {action}.
    </div>
  );
};

export default Unauthorized;
