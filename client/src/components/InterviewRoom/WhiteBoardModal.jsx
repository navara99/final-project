import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Paper } from "@mui/material";
import Draggable from "react-draggable";
import WhiteBoard from "./WhiteBoard";
import { useState } from "react";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function WhiteBoardModal({ boardCode }) {
  const [openWhiteBoard, setOpenWhiteBoard] = useState(false);

  const handleWhiteBoardOpen = () => {
    setOpenWhiteBoard(!openWhiteBoard);
  };

  return (
    <>
      <Button variant="contained" onClick={handleWhiteBoardOpen} >White Board</Button>
      <Dialog
        hideBackdrop={true}
        open={openWhiteBoard}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        maxWidth="lg"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          White Board
        </DialogTitle>
        <DialogContent>
          <WhiteBoard boardCode={boardCode} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpenWhiteBoard(!openWhiteBoard)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default WhiteBoardModal;