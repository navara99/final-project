import React from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  Button,
  DialogActions,
} from "@mui/material";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useParams } from "react-router";
import DateAdapter from "@mui/lab/AdapterMoment";
import { DatePicker, TimePicker } from "@mui/lab";
import { useState } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { combineDateTimes } from "../../helpers/date";

function ScheduleInterviewForm({
  interviewFormOpen,
  setInterviewFormOpen,
  application,
  jobTitle,
  setOrganizationDetails,
  setSnackBarDetails,
}) {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const { id } = useParams();

  const handleFairSubmit = async () => {
    const [startTimeStamp, endTimeStamp] = combineDateTimes(
      date,
      startTime,
      endTime
    );
    const newInterview = {
      startTimeStamp,
      endTimeStamp,
    };

    try {
      const { data } = await axios.post("/api/messages/interview", newInterview);
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
