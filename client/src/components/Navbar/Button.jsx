import React from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Badge from "@mui/material/Badge";

const Button = ({ Icon, to, text, numOfUnreadMsg }) => {
  return (
    <Tippy content={text} placement="right" theme="material" arrow={true}>
      <Link to={to} className="navbar-button">
        <Badge badgeContent={numOfUnreadMsg} color="warning">
          <Icon />
        </Badge>
      </Link>
    </Tippy>
  );
};

export default Button;
