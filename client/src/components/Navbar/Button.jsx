import React from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; 

const Button = ({ Icon, to, text }) => {
  return (
    <Tippy
      content={text}
      placement="right"
      theme="material"
      arrow={true}
    >
      <Link to={to} className="navbar-button">
        <Icon />
      </Link>
    </Tippy>
  );
};

export default Button;
