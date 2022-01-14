import React from "react";
import Button from "./Button";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GroupsIcon from "@mui/icons-material/Groups";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from '@mui/icons-material/Logout';

const UserButtons = ({ logout, currentUser }) => {
  return (
    <div>
      <Button to="/schedule" Icon={DateRangeIcon} />
      <Button to="/messages" Icon={ForumIcon} />
      <Button to="/groups" Icon={GroupsIcon} />
      <Button to="/settings" Icon={SettingsIcon} />
      <span onClick={logout} className="navbar-button">
        <LogoutIcon />
      </span>
    </div>
  );
};

export default UserButtons;
