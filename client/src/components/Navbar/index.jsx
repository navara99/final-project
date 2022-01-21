import React from "react";
import "./Navbar.css";
import MainButtons from "./MainButtons";
import NullUserButtons from "./NullUserButtons";
import UserButtons from "./UserButtons";

const Navbar = ({ currentUser, logout, numOfUnreadMsg }) => {
  return (
    <div className="navbar">
      <MainButtons />
      {!currentUser && <NullUserButtons />}
      {currentUser && <UserButtons {...{ currentUser, logout, numOfUnreadMsg }} />}
    </div>
  );
};

export default Navbar;
