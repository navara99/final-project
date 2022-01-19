import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    height: "90%"
  }
}));

function Resume({ application, openResume, setOpenResume }) {
  const classes = useStyles();

  return (
    <>
      <Dialog open={openResume} fullWidth={true} maxWidth={"lg"} onClose={() => { }} classes={{ paper: classes.dialogPaper }}>
        <DialogTitle>{application.first_name}'s Resume</DialogTitle>
        <DialogContent>
          <embed src={"http://localhost:8080/" + application.resume + "#toolbar=0"} height="100%" width="100%" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpenResume(!openResume) }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )

}

export default Resume;