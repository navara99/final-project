import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const Unauthorised = ({ action, logout }) => {
  const Button = logout ? LogoutButton : LoginButton;
  return (
    <div className="unauthorised">
      <h2>Not Authorised</h2>
      <Button logout={logout} />
      &nbsp;before you can {action}.
    </div>
  );
};

export default Unauthorised;
