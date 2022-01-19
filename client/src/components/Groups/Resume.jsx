import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

function Resume({ application, openResume, setOpenResume }) {


  return (
    <>
      <Dialog open={openResume} onClose={() => { }}>
        <DialogTitle>{application.first_name}'s Resume</DialogTitle>
        <DialogContent>
          <embed src={"http://localhost:8080/" + application.resume + "#toolbar=0"} width="100%" height="80%" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpenResume(!openResume) }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )

}

export default Resume;