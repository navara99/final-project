import React from "react";
import { Button } from "@mui/material";
import "./groups.css";

function GroupsBtn({ text, variant, icon }) {


  return (
    <Button variant={variant} style={{ margin: "0.8em 0.25em" }} startIcon={icon}>{text}</Button>
  );
};

export default GroupsBtn;