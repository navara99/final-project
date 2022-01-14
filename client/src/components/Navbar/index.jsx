import React from "react";
import "./Navbar.css";
import MainButtons from "./MainButtons";
import NullUserButtons from "./NullUserButtons"

const Navbar = ({ currentUser }) => {
  return (
    <div className="navbar">
      <MainButtons />
      {!currentUser && <NullUserButtons />}
    </div>
  );
};

export default Navbar;
