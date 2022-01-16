import React from "react";
import Button from "./Button";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GroupsIcon from "@mui/icons-material/Groups";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const UserButtons = ({ logout, currentUser }) => {
  return (
    <div>
      <Button
        {...{ to: "/schedule", Icon: DateRangeIcon, text: "My Schedule" }}
      />
      <Button {...{ to: "/messages", Icon: ForumIcon, text: "Messages" }} />
      <Button {...{ to: "/organizations", Icon: GroupsIcon, text: "My Organizations" }} />
      <Button {...{ to: "/settings", Icon: SettingsIcon, text: "Settings" }} />
      <Tippy content="Logout" placement="right" theme="material" arrow={true} >
        <span onClick={logout} className="navbar-button">
          <LogoutIcon />
        </span>
      </Tippy>
    </div>
  );
};

export default UserButtons;
