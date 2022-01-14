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
import DateRangeIcon from "@mui/icons-material/DateRange";
import GroupsIcon from "@mui/icons-material/Groups";

const UserButtons = ({ logout, currentUser }) => {
  return (
    <div>
      <Button to="/schedule" Icon={DateRangeIcon} />
      <Button to="/groups" Icon={GroupsIcon} />
      {/*  <Button to="/messages" icon={faComment} />
      <Button to="/settings" icon={faCog} /> */}
      <span onClick={logout} className="navbar-button">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </span>
    </div>
  );
};

export default UserButtons;
