import React from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  Button,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import DateAdapter from "@mui/lab/AdapterMoment";
import { DatePicker, TimePicker } from "@mui/lab";
import { useState } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  combineDateTimes,
  formatDate,
  formatStartEndTime,
} from "../../helpers/date";

function ScheduleInterviewForm({
  interviewFormOpen,
  setInterviewFormOpen,
  application,
  jobTitle,
  setSnackBarDetails,
}) {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleFairSubmit = async () => {
    const [start, end] = combineDateTimes(date, startTime, endTime);
    const message = `You are invited to an interview for ${jobTitle} (${
      application.organization_name
    }) at ${formatStartEndTime(start, end)} on ${formatDate(start)}`;
    const newInterview = {
      message,
      start,
      end,
      applicationId: application.id,
      receiverId: application.user_id,
    };

    try {
      await axios.post("/api/messages/interview", newInterview);
      setSnackBarDetails({
        open: true,
        message: "Interview invitation has been sent",
      });
    } catch (err) {
      console.log(err.message);
    }

    setInterviewFormOpen(!interviewFormOpen);
  };

  return (
    <Dialog
      open={interviewFormOpen}
      onClose={() => setInterviewFormOpen(!interviewFormOpen)}
    >
      <DialogTitle>
        Schedule Interview with
        {` ${application.first_name} ${application.last_name[0]}. for ${jobTitle}`}
      </DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            renderInput={(props) => (
              <TextField fullWidth {...props} sx={{ mt: 1.5 }} />
            )}
            label="Date"
            value={date}
            onChange={(date) => {
              setDate(date);
            }}
          />
          <TimePicker
            renderInput={(props) => (
              <TextField fullWidth {...props} sx={{ mt: 1.5 }} />
            )}
            label="Start Time"
            value={startTime}
            onChange={(time) => {
              setStartTime(time);
            }}
          />
          <TimePicker
            renderInput={(props) => (
              <TextField fullWidth {...props} sx={{ mt: 1.5 }} />
            )}
            label="End Time"
            value={endTime}
            onChange={(time) => {
              setEndTime(time);
            }}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setInterviewFormOpen(!interviewFormOpen);
          }}
        >
          Cancel
        </Button>
        <Button onClick={handleFairSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ScheduleInterviewForm;
