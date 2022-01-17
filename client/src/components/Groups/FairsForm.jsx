import React from "react";
import { Dialog, DialogTitle, TextField, DialogContent, Button, DialogActions } from "@mui/material";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useParams } from "react-router";
import DateAdapter from '@mui/lab/AdapterMoment';
import { DatePicker, TimePicker } from '@mui/lab';
import { useState } from "react";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { combineDateTimes } from "../../helpers/date";

function FairsForm({ fairsFormOpen, setFairsFormOpen }) {
  const [name, setName] = useInput();
  const [description, setDescription] = useInput();
  const [date, setDate] = useState(Date.now());
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());
  const { id } = useParams();

  const handleFairSubmit = async () => {
    const newFair = {
      name,
      description,
      hostId: id,
    };

    const [startTimeStamp, endTimeStamp] = combineDateTimes(date, startTime, endTime);

    console.log(startTimeStamp, endTimeStamp);

    try {
      // const { data } = await axios.post("/api/fairs", newFair);
      // console.log(data);
    } catch (err) {
      console.log(err.message);
    }

    setFairsFormOpen(!fairsFormOpen);

  };

  console.log(fairsFormOpen);
  return (
    <Dialog open={fairsFormOpen} onClose={() => { }}>
      <DialogTitle>Create A New Fair</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          required
          onChange={setName}
        />
        <TextField
          multiline
          rows="6"
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          required
          onChange={setDescription}
        />
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            renderInput={(props) => <TextField fullWidth {...props} sx={{ mt: 1.5 }} />}
            label="Date"

            value={date}
            onChange={(date) => {
              setDate(date);
            }}
          />
          <TimePicker
            renderInput={(props) => <TextField fullWidth {...props} sx={{ mt: 1.5 }} />}
            label="Start Time"
            value={startTime}
            onChange={(time) => {
              setStartTime(time);
            }}
          />
          <TimePicker
            renderInput={(props) => <TextField fullWidth {...props} sx={{ mt: 1.5 }} />}
            label="End Time"
            value={endTime}
            onChange={(time) => {
              setEndTime(time);
            }}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { setFairsFormOpen(!fairsFormOpen) }}>Cancel</Button>
        <Button onClick={handleFairSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FairsForm;