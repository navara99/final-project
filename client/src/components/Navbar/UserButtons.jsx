import React from "react";
import Button from "./Button";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GroupsIcon from "@mui/icons-material/Groups";
import ForumIcon from "@mui/icons-material/Forum";
import LogoutIcon from "@mui/icons-material/Logout";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const UserButtons = ({ logout, currentUser }) => {
  return (
    <div>
      <Button
        {...{ to: "/schedule", Icon: DateRangeIcon, text: "My Schedule" }}
      />
      <Button {...{ to: "/messages", Icon: ForumIcon, text: "Messages" }} />
      <Button
        {...{
          to: "/organizations",
          Icon: GroupsIcon,
          text: "My Organizations",
        }}
      />
      <Tippy content="Settings" placement="right" theme="material" arrow={true}>
        <div className="navbar-button">
          <Avatar
            component={Link}
            to="/settings"
            alt={currentUser.username}
            src={currentUser.profile_picture}
          />
        </div>
      </Tippy>
      <Tippy content="Logout" placement="right" theme="material" arrow={true}>
        <span onClick={logout} className="navbar-button">
          <LogoutIcon />
        </span>
      </Tippy>
    </div>
  );
};

export default UserButtons;
