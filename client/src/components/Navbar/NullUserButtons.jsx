import React from "react";
import Button from "./Button";
import { faSignInAlt, faRegistered } from "@fortawesome/free-solid-svg-icons";

const NullUserButtons = () => {
  return (
    <div>
      <Button to="/login" icon={faSignInAlt} />
      <Button to="/register" icon={faRegistered} />
    </div>
  );
};

export default NullUserButtons;
