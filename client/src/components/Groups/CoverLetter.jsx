import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

function CoverLetter({ application, openCoverLetter, setOpenCoverLetter }) {


  return (
    <Dialog open={openCoverLetter} fullWidth={true} maxWidth={"md"} onClose={() => { }}>
      <DialogTitle>{application.first_name}'s Cover Letter</DialogTitle>
      <DialogContent>
        {application.message}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setOpenCoverLetter(!openCoverLetter) }}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CoverLetter;