import React from "react";
import { Button } from "@mui/material";
import "./groups.css";

function GroupsBtn({ text, variant, icon, onClick, deActive }) {


  return (
    <Button variant={variant} style={{ margin: "0.8em 0.25em" }} startIcon={icon} {...{ onClick }} disabled={deActive ? true : false} >{text}</Button>
  );
};

export default GroupsBtn;