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

const UserButtons = () => {
  return (
    <div>
      <Button to="/schedule" icon={faCalendar} />
      <Button to="/groups" icon={faUsers} />
      <Button to="/messages" icon={faComment} />
      <Button to="/settings" icon={faCog} />
      <span href="/logout">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </span>
    </div>
  );
};

export default UserButtons;
