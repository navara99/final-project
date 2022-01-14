import React from "react";
import "./Navbar.css";
import MainButtons from "./MainButtons";
import NullUserButtons from "./NullUserButtons"
import UserButtons from "./UserButtons";

const Navbar = ({ currentUser }) => {
  return (
    <div className="navbar">
      <MainButtons />
      {!currentUser && <NullUserButtons />}
      {currentUser && <UserButtons currentUser={currentUser} />}
    </div>
  );
};

export default Navbar;
