import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./schedule.css";
import Event from "./Event";
import useSchedule from "../../hooks/useSchedule";

const localizer = momentLocalizer(moment);

// const events = [
//   {
//     id: 0,
//     title: "All Day Event very long title",
//     allDay: true,
//     start: new Date(2022, 1, 0),
//     end: new Date(2022, 1, 1),
//   },
//   {
//     id: 1,
//     title: "Long Event",
//     start: new Date(2022, 1, 7),
//     end: new Date(2022, 1, 10),
//   },

//   {
//     id: 2,
//     title: "DTS STARTS",
//     start: new Date(2022, 1, 13, 0, 0, 0),
//     end: new Date(2022, 1, 20, 0, 0, 0),
//   },

//   {
//     id: 3,
//     title: "DTS ENDS",
//     start: new Date(2022, 1, 6, 0, 0, 0),
//     end: new Date(2022, 1, 13, 0, 0, 0),
//   },

//   {
//     id: 4,
//     title: "Some Event",
//     start: new Date(2022, 1, 9, 0, 0, 0),
//     end: new Date(2022, 1, 10, 0, 0, 0),
//   },
//   {
//     id: 5,
//     title: "Conference",
//     start: new Date(2022, 1, 11),
//     end: new Date(2022, 1, 13),
//     desc: "Big conference for important people",
//   },
//   {
//     id: 6,
//     title: "Meeting",
//     start: new Date(2022, 1, 12, 10, 30, 0, 0),
//     end: new Date(2022, 1, 12, 12, 30, 0, 0),
//     desc: "Pre-meeting meeting, to prepare for the meeting",
//   },
//   {
//     id: 7,
//     title: "Lunch",
//     start: new Date(2022, 1, 12, 12, 0, 0, 0),
//     end: new Date(2022, 1, 12, 13, 0, 0, 0),
//     desc: "Power lunch",
//   },
//   {
//     id: 8,
//     title: "Meeting",
//     start: new Date(2022, 1, 12, 14, 0, 0, 0),
//     end: new Date(2022, 1, 12, 15, 0, 0, 0),
//   },
//   {
//     id: 9,
//     title: "Happy Hour",
//     start: new Date(2022, 1, 12, 17, 0, 0, 0),
//     end: new Date(2022, 1, 12, 17, 30, 0, 0),
//     desc: "Most important meal of the day",
//   },
//   {
//     id: 10,
//     title: "Dinner",
//     start: new Date(2022, 1, 12, 20, 0, 0, 0),
//     end: new Date(2022, 1, 12, 21, 0, 0, 0),
//   },
//   {
//     id: 11,
//     title: "Planning Meeting with Paige",
//     start: new Date(2022, 1, 13, 8, 0, 0),
//     end: new Date(2022, 1, 13, 10, 30, 0),
//   },
//   {
//     id: 11.1,
//     title: "Inconvenient Conference Call",
//     start: new Date(2022, 1, 13, 9, 30, 0),
//     end: new Date(2022, 1, 13, 12, 0, 0),
//   },
//   {
//     id: 11.2,
//     title: "Project Kickoff - Lou's Shoes",
//     start: new Date(2022, 1, 13, 11, 30, 0),
//     end: new Date(2022, 1, 13, 14, 0, 0),
//   },
//   {
//     id: 11.3,
//     title: "Quote Follow-up - Tea by Tina",
//     start: new Date(2022, 1, 13, 15, 30, 0),
//     end: new Date(2022, 1, 13, 16, 0, 0),
//   },
//   {
//     id: 12,
//     title: "Late Night Event",
//     start: new Date(2022, 1, 17, 19, 30, 0),
//     end: new Date(2022, 1, 18, 2, 0, 0),
//   },
//   {
//     id: 12.5,
//     title: "Late Same Night Event",
//     start: new Date(2022, 1, 17, 19, 30, 0),
//     end: new Date(2022, 1, 17, 23, 30, 0),
//   },
//   {
//     id: 13,
//     title: "Multi-day Event",
//     start: new Date(2022, 1, 20, 19, 30, 0),
//     end: new Date(2022, 1, 22, 2, 0, 0),
//   },
//   {
//     id: 14,
//     title: "Today",
//     start: new Date(new Date().setHours(new Date().getHours() - 3)),
//     end: new Date(new Date().setHours(new Date().getHours() + 3)),
//   },
//   {
//     id: 16,
//     title: "Video Record",
//     start: new Date(2022, 1, 14, 15, 30, 0),
//     end: new Date(2022, 1, 14, 19, 0, 0),
//   },
//   {
//     id: 17,
//     title: "Dutch Song Producing",
//     start: new Date(2022, 1, 14, 16, 30, 0),
//     end: new Date(2022, 1, 14, 20, 0, 0),
//   },
//   {
//     id: 18,
//     title: "Itaewon Halloween Meeting",
//     start: new Date(2022, 1, 14, 16, 30, 0),
//     end: new Date(2022, 1, 14, 17, 30, 0),
//   },
//   {
//     id: 19,
//     title: "Online Coding Test",
//     start: new Date(2022, 1, 14, 17, 30, 0),
//     end: new Date(2022, 1, 14, 20, 30, 0),
//   },
//   {
//     id: 20,
//     title: "An overlapped Event",
//     start: new Date(2022, 1, 14, 17, 0, 0),
//     end: new Date(2022, 1, 14, 18, 30, 0),
//   },
//   {
//     id: 21,
//     title: "Phone Interview",
//     start: new Date(2022, 1, 14, 17, 0, 0),
//     end: new Date(2022, 1, 14, 18, 30, 0),
//   },
//   {
//     id: 22,
//     title: "Cooking Class",
//     start: new Date(2022, 1, 14, 17, 30, 0),
//     end: new Date(2022, 1, 14, 19, 0, 0),
//   },
//   {
//     id: 23,
//     title: "Go to the gym",
//     start: new Date(2022, 1, 14, 18, 30, 0),
//     end: new Date(2022, 1, 14, 20, 0, 0),
//   },
// ];

const Schedule = () => {
  const events = useSchedule();
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
