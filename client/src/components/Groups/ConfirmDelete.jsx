import React from "react";
import { Dialog, DialogTitle, Button, DialogActions } from "@mui/material";

function ConfirmDelete({ onClick, confirmModal, setConfirmModal, message }) {

  return (
    <>
      <Dialog open={confirmModal} fullWidth={true} onClose={() => setConfirmModal(!confirmModal)}>
        <DialogTitle>{message}</DialogTitle>
        <DialogActions>
          <Button onClick={() => { setConfirmModal(!confirmModal) }}>Cancel</Button>
          <Button {...{ onClick }}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ConfirmDelete;