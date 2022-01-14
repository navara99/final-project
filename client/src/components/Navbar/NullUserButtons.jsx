import React from "react";
import Button from "./Button";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const NullUserButtons = () => {
  return (
    <div>
      <Button to="/login" Icon={LoginIcon} />
      <Button to="/register" Icon={AppRegistrationIcon} />
    </div>
  );
};

export default NullUserButtons;
