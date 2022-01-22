import React from "react";
import Helmet from "react-helmet";
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Paper } from "@mui/material";
import Draggable from "react-draggable";

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

function WhiteBoard({ openWhiteBoard, setOpenWhiteBoard }) {

  return (
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
        <div style={{ width: 600, height: 550 }} id="wt-container"></div>
        <Helmet async={false}>
          <script>
            {`var wt = new api.WhiteboardTeam('#wt-container', {
                  clientId: '${process.env.REACT_APP_CLIENT_ID}',
                  boardCode: 'tharsikantharsikan',
                  board: {
                  tool: "text",
                  bg: "None"
                  }})`}
          </script>
        </Helmet>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setOpenWhiteBoard(!openWhiteBoard)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WhiteBoard;