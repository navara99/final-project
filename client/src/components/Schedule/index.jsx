import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./schedule.css";
import Event from "./Event";
import useSchedule from "../../hooks/useSchedule";
import useTitle from "../../hooks/useTitle";

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const events = useSchedule();
  useTitle("My Schedule");
  return (
    <div className="schedule">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        tooltipAccessor={null}
        components={{
          event: Event,
        }}
        eventPropGetter={(event, start, end, isSelected) => ({
          event,
          start,
          end,
          isSelected,
          style: { backgroundColor: event.isInterview ? "#4274A8" : "#F19937" }
        })}
      />
    </div>
  );
};

export default Schedule;
