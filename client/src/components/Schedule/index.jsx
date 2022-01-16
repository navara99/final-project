import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./schedule.css"

const localizer = momentLocalizer(moment);

const Schedule = () => {
  return (
    <div className="schedule">
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default Schedule;
