import React from "react";
import Button from "./Button";
import {
  faUsers,
  faSignOutAlt,
  faCalendar,
  faCog,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserButtons = ({logout, currentUser}) => {
  return (
    <div>
      <Button to="/schedule" icon={faCalendar} />
      <Button to="/groups" icon={faUsers} />
      <Button to="/messages" icon={faComment} />
      <Button to="/settings" icon={faCog} />
      <span onClick={logout} className="navbar-button">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </span>
    </div>
  );
};

export default UserButtons;
