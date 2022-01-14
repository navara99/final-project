import React from "react";
import { Dialog, DialogTitle } from "@mui/material";

function ErrorModal({ errorMessage, showError, setShowError }) {

  return (
    <Dialog onClose={() => setShowError(false)} open={showError}>
      <DialogTitle>{errorMessage}</DialogTitle>
    </Dialog>
  );
};

export default ErrorModal;