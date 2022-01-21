import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JoinButton = ({ live, added, upcoming, id, add }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [options, setOptions] = useState();

  useEffect(() => {
    axios.get(`/api/fairs/organizations/${id}`).then(({ data }) => {
      if (data.length > 0) setOptions(data.filter(({ added }) => added));
    });
  }, [id]);

  const joinLive = () => {
    navigate(`/live/${id}`);
  };

  const handleMenuItemClick = (event, index) => {
    // axios
    //   .post(`/api/fairs/join/${id}/organizations/${options[index].id}`)
    //   .then(() => {
    //     setOptions((prev) => {
    //       const newState = [...prev];
    //       newState[index] = { ...newState[index], added: true };
    //       return newState;
    //     });
    //   });
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={joinLive} disabled={!live} >
          Join
        </Button>
        {options && options.length > 0 && (
          <Button
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="menu"
            onClick={handleToggle}
            disabled={!live}
          >
            <ArrowDropDownIcon />
          </Button>
        )}
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.id}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      disabled={!live}
                    >
                      Join as {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
export default JoinButton;
